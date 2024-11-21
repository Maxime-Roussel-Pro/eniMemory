
let btn = document.querySelector(".btn");

btn.addEventListener("click", getValue());

function getValue(){

    let name = document.getElementById("name").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let mdp = document.getElementById("mdp").value;
    let confir = document.getElementById("mdp2").value;

   validateEmail();


    if(mdp === confir){
        console.log("ouai")
    }else{
        console.log("non");
        window.alert("votre mdp est différent");
    }

    return [name, prenom, email, mdp, confir]
    
    
}
function validateEmail() {
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      feedbackElement.textContent = ""; // Email is valid
      console.log("lets go");
    } else {
      feedbackElement.textContent = "Please enter a valid email address.";
      console.log("NON");

    }
  }

