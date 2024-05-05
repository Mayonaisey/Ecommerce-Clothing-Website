
    

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const number = document.getElementById('number');
const country = document.getElementById('country');
const address = document.getElementById('Address');
const details = document.getElementById('details');
const checkbox = document.getElementById('checkbox');

let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();
  let numberValue = number.value.trim();
  let countryValue = country.value.trim();
  let addressValue = address.value.trim();
  let detailsValue = details.value.trim();
  let checkboxValue = checkbox.checked;



  let user = {
    /* username: usernameValue,
     email: emailValue,
     password: passwordValue,
     password2: password2Value,
     number: numberValue,
     country: countryValue,
     address: addressValue,
     details: detailsValue,
     isDefault: checkboxValue*/
 
     username: "zaha",
     email: "zahaaaaa",
     password: "zzzz",
     password2: "zzzz",
     number: 111,
     country: "cc",
     address: "addresss",
     details: "detailsss"
   /*  isDefault: checkboxValue*/
 
 
   };
   
function validateForm() {
  const message = document.getElementById('passmessage');

  
  if (passwordValue !== "") { 
    if (passwordValue === password2Value) {
        message.textContent = "Passwords Match";
        message.style.backgroundColor = "#3ae374";
    } else {
        message.textContent = "Password does not match";
        message.style.backgroundColor = "#ff4d4d";
    }
} else {
    alert("password can't be empty !"); 
}
}

