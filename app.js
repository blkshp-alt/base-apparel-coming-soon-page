'use strict';
//we need to listen for our submit event and check if our email input field is valid

const form = document.getElementById('form');
const email = document.getElementById('email');

//reset on pageload
window.onload = () => {
  email.value = '';
}


//add event listener when the form is submitted
form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  checkEmail();
});


function checkEmail() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } 
  else if (!validEmail(emailValue)) {
    setErrorFor(email, 'Please provide a valid email');
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement; 
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error-mssg';
}



function validEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}