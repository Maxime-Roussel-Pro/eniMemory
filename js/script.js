//-- création du tableau
let array = [];
let x = 6;
let baliseHtmlCard = [];

//-- Rempissage du tableau dans l'ordre
for(let i=1; i<x ; i++){
    array.push(i) ;  
    array.push(i); 
}

//-- on mélange autant de fois qu'il y a de cartes
for(let i=0; i<x ; i++){
  array = shuffle(array);
}
console.log(array);

//--fonction pour mélanger le tableau
function shuffle(array){
  const resultArr= [];

  for(let i=0; i<x; i++){
    const numAlea = getRandomInt(x);
      if(numAlea>x/2){
        resultArr.unshift(array[i]);
      }else{
        resultArr.push(array[i]);
      }
    }
    return resultArr
}

//-- fonction pour avoir un nombre aléatoire
function getRandomInt(max){
  return Math.floor(Math.random()*max)
}
//--assignation des nombres aux cartes et affichage selon le nombre de cartes tot (x)
const gameGrid = document.querySelector(".gameGrid")
for(let i = 0; i<x ; i++){
  const element = document.createElement("img");
  element.classList.add("card");
  element.id="card"+i;
  element.src="./sources/dinosaures/"+array[i]+".jpg";
  gameGrid.appendChild(element);
  baliseHtmlCard[i]= element;
 }
//--jeu
 
let buffer = [0] ;//-- compteur du nombre de cartes sélectionnées
let cardsOut = [];
//-- Création d'un addeventlistener sur chaque élément qui possede la classe card
let cards = document.getElementsByClassName("card");
cards = [...cards];
cards.forEach((a) => {
  a.addEventListener("click", launchTirage)});

//-- créé la condition avant de check les sources 
function checkCards(cardsOut){
  if(cardsOut.length <2){
  }else if(cardsOut.length === 2){
    compare();
    cardsOut.length=0;
  }
}

function launchTirage(event){
  if(buffer[0] === 0){
    const selectCard = event.target;
    cardsOut.push(selectCard);
    checkCards(cardsOut);
    buffer[0] ++ ;
  }else if(buffer[0] === 1){
    const selectCard = event.target;
    cardsOut.push(selectCard);
    checkCards(cardsOut);
    buffer[0] = 0;
  }
}

function compare(){
  if(cardsOut[0].src === cardsOut[1].src){
    console.log("YOU WIN");
  }else{
    console.log("essaye encore");
  }
}