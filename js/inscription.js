
let btn = document.querySelector(".btn");
let mdpValid=false;
let emailValid=false;

btn.addEventListener("click", getValue());

function getValue(){

    let name = document.getElementById("name");
    let nameEnd = name.value;
    console.log(nameEnd);
    let prenom = document.getElementById("prenom");
    let prenomEnd = prenom.value;
    console.log(prenomEnd);    
    let email = document.getElementById("email");
    let emailEnd = email.value;
    console.log(emailEnd);
    let mdp = document.getElementById("mdp");
    let mdpEnd = mdp.value;
    console.log(mdpEnd);
    let mdp2 = document.getElementById("mdp2");
    let mdp2End = mdp2.value;
    console.log(mdp2End);

   validateEmail(emailEnd);
   validatemdp(mdpEnd,mdp2End);
    if(mdpValid === true && emailValid === true){
        window.location.href="profile.html"
    }

   

    return [nameEnd, prenomEnd, emailEnd, mdpEnd, mdp2End]
    
    
}

function validateEmail(emailEnd) {
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailEnd)) {
      feedbackElement.textContent = ""; // Email is valid
      console.log("lets go");
      emailValid = true;
    } else {
        emailValid = false;
      feedbackElement.textContent = "Please enter a valid email address.";
      console.log("NON");

    }
}

function validatemdp(mdp2End,mdpEnd){
    if(mdpEnd === mdp2End){
        mdpValid = true;
    }else{
        console.log("non");
        window.alert("votre mdp est différent");
        mdpValid =  false;
    }
}