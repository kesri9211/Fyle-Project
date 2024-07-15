// Description: This file contains the javascript code for the form.
const form = document.querySelector('#userform');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value.trim();
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();

  if(email===''){
    alert('Please enter your email.');
  }
  if (fname === '') {
    alert('Please enter your first.');
  } 
  if (lname === '') {
    alert('Please enter your last name.');
  }
  else{
    alert(`Thank you for submitting the form.\n Your email is ${email}\n first name is ${fname}\n last name is ${lname}.`);
  }
});
