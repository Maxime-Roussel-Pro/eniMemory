window.onload = init;

function init() {
  //--Déclaration de mes variables ou constantes
  const cards = document.querySelectorAll(".card");
  let bufferCard;
  let table = [];
  let newTable = [];
  let counter = 0

  //--Gestion des événements
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      getCardOnclick(event);

      if(counter<2)

      //--Remplir le tableau une seule fois si nécessaire
      if (table.length === 0) {
        table = generateRandomCards(1, 13);
        for (let i = 0; i < table.length / 2; i++) {
          newTable[i] = table[i];
          newTable[i + table.length / 2] = table[i];
        }
        
        console.log(newTable);
      }
      //-- Animation de la carte
      bufferCard.style.transform = "rotateY(180deg)";
      bufferCard.style.transition = "transform 1s"

      //--Obtenir une valeur aléatoire à partir du tableau
      const randomIndex = Math.floor(Math.random() * newTable.length);
      const randomValue = newTable[randomIndex];

      //--Exemple d'utilisation (changer l'image source)
      bufferCard.src = `./sources/dinosaures/${randomValue}.jpg`;
      const indexRV = newTable.indexOf(randomValue);
      newTable.splice(indexRV, 1);
      console.log(newTable);

    });
  });

  //--Récuperation de la carte cliquée
  function getCardOnclick(event) {
    const clickedElement = event.target;
    bufferCard = clickedElement;
    const idList = clickedElement.id;
  }

  //--Générer un tableau de valeurs aléatoires uniques entre min et max
  function generateRandomCards(min, max) {
    const array = [];
    while (array.length < max - min) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      if (!array.includes(randomNumber)) {
        array.push(randomNumber);
      }
    }
    return array;
  }
}
