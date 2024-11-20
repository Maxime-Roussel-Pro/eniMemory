//-- création du tableau
let array = [];
let baliseHtmlCard = [];
let counterWin = 0;
let counterError = 0;
let defineX;
let x = 6;

//--------------------------------------------------------- a regler, recuperation du select (fonctionne pas )
var elt = document.querySelector('select');
    elt.addEventListener('change', function (){
       x = this.selectedIndex;
       return x;
    })
  

//-- Rempissage du tableau dans l'ordre
for(let i=1; i<x ; i++){
    array.push(i, i) ;   
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
  element.draggable =false;
  //element.style.backgroundImage = "./sources/interro.png";
  element.style.opacity ="0";
  gameGrid.appendChild(element);
  baliseHtmlCard.push(element);
 }
//--jeu
 
let buffer = [0] ;//-- compteur du nombre de cartes sélectionnées
let cardsOut = [];//-- tableau rempli des deux cartes tirées
//-- Création d'un addeventlistener sur chaque élément qui possede la classe card
let cards = document.getElementsByClassName("card");
cards = [...cards];
cards.forEach((a) => {
  a.addEventListener("click", launchTirage)});

//-- créé la condition avant de check les sources 
function checkCards(cardsOut){
  if(cardsOut.length <2){
  }else if(cardsOut.length === 2){
    if(cardsOut[0] !== cardsOut[1]){
    compare();
    cardsOut.length=0;
    cards.forEach((a) => {
      a.removeEventListener("click", launchTirage)});
    setTimeout(()=>{
      cards.forEach((a) => {
      a.addEventListener("click", launchTirage)});
  },1000)}else{

  }
}
}
//--met les cartes cliquées dans un tableau
function launchTirage(event){
  if(buffer[0] === 0){
    const selectCard = event.target;
    //--Faire que la carte cliquée se retournent
    selectCard.style.opacity="1";
    cardsOut.push(selectCard);
    checkCards(cardsOut);
    buffer[0] ++ ;
  }else if(buffer[0] === 1){
    const selectCard = event.target;
    selectCard.style.opacity="1";
    cardsOut.push(selectCard);
    checkCards(cardsOut);
    buffer[0] = 0;
    
  }
}
//-- Compare les deux éléments cliqués 
function compare(){
  if(cardsOut[0].src === cardsOut[1].src){
    cardsOut[0].removeEventListener("click", launchTirage);
    cardsOut[1].removeEventListener("click", launchTirage);
    counterWin +=2;
    //-- Condition de victoire ( toutes les cartes ont été trouvées)
    if(counterWin === x){
        console.log("Mais quel BGGGGGGG");
        console.log("Tu as fait : "+counterError+" erreurs")
    }
  }else{
    //--Faire que les deux cartes selectionnées se retournent  + gestion des erreurs
    let deletedCard1 = cardsOut[0];
    let deletedCard2 = cardsOut[1];
    counterError ++;
    const errorHtml = document.querySelector(".error")
    const error = document.createElement("img");
    error.src ="./sources/error.svg";
    error.className="imgError";
    errorHtml.appendChild(error);
    setTimeout(() => {
      deletedCard1.style.opacity ="0";
      deletedCard2.style.opacity ="0";;
    }, 1000);
  } 
}
//-- fonction pour determiner la valeur de x 
