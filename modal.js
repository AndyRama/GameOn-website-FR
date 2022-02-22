function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");

const formModal = document.getElementById("form-modal")
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");

const errorFirst = document.querySelector(".errorFirst");
const errorLast = document.querySelector(".errorLast");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal X
document.getElementById("closemodal").addEventListener("click", function(e) {
  modalbg.style.display ="none";
})

//Check validation for firstname[nb letters] < 2
function checkFirstName(value) {
  if(value && value.length > 2) {
    return true;
  } else {
    return false;
  }
}

//Check validation for lastname[nb letters] < 2
function checkLastName(value) {
  if(value && value.length > 2) {
    return true;
  } else {
    return false;
  }
}


// Reset error 
function resetError() {
  errorFirst.innerHTML = "";
  errorLast.innerHTML = "";
}

//listen activity for form
formModal.addEventListener("submit", event => {
  event.preventDefault();
  resetError();
  if(!checkFirstName(firstName.value)){
    errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour votre prénom.";
    errorFirst.style.color = "red";
    errorFirst.style.fontSize = "0.8rem";
  } else {
    errorFirst.innerHTML =" Votre prénom est valide";
    errorFirst.style.color = "green";
    errorFirst.style.fontSize= "0.8rem";
  }

  if(!checkLastName(lastName.value)) {
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour votre nom.";
    errorLast.style.color = "red";
    errorLast.style.fontSize = "0.8rem";    
  } else {
    errorLast.innerHTML = "Votre nom est valide.";
    errorLast.style.color = "green";
    errorLast.style.fontSize = "0.8rem"; 
  }
});


