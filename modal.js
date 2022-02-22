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
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");

const city = document.querySelectorAll(".location");

const errorFirst = document.querySelector(".errorFirst");
const errorLast = document.querySelector(".errorLast");
const errorEmail = document.querySelector(".errorEmail");
const errorQuantity = document.querySelector(".errorQuantity");
const errorCity = document.querySelector(".errorCity");

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

//Check validation for email with Regex
function checkEmail(value) {
  return String(value)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//Check validation number tournament
function checkQuantity(value) {
  if(isNaN(value)|| value.length == 0){
    // console.log("test");
    return false;
  
  } else {
    errorQuantity.innerHTML = "";
    // console.log("test2");
    return true;
  }
}

//Check validation for city 
function checkCity(elements) {
  let checked = false;
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].checked) {
      checked = true;
    }
  }
  return checked;
}


// Reset error 
function resetError() {
  errorFirst.innerHTML = "";
  errorLast.innerHTML = "";
  errorEmail.innerHTML = "";
  errorQuantity.innerHTML = "";
  errorCity.innerHTML = "";
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

  if(!checkEmail(email.value)) {
    errorEmail.innerHTML = "Veuillez saisir une adresse mail valide.";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "0.8rem";    
  } else {
    errorEmail.innerHTML = "Votre email est accepté.";
    errorEmail.style.color = "green";
    errorEmail.style.fontSize = "0.8rem"; 
  }

  if(!checkQuantity(quantity.value)) {
    errorQuantity.innerHTML = "Veuillez saisir votre nombre de participation.";
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = "0.8rem";    
  } else {
    errorQuantity.innerHTML = "Votre réponse est accepté.";
    errorQuantity.style.color = "green";
    errorQuantity.style.fontSize = "0.8rem"; 
  }

  if(!checkCity(city)) {
    errorCity.innerHTML = "Veuillez selectionner une ville.";
    errorCity.style.color = "red";
    errorCity.style.fontSize = "0.8rem";    
  } else {
    errorCity.innerHTML = "Localisation est valide.";
    errorCity.style.color = "green";
    errorCity.style.fontSize = "0.8rem"; 
  }
});


