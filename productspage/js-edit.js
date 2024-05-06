 user = {
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
   email: "zaha@gmail.com",
   password: "zaha123",
   password2: "zaha123",
   number: 1095921133,
   country: "cairo",
   address: "rehab city ",
   details: "in front of gate 17"
 /*  isDefault: checkboxValue*/


 };

  
  function change(){
    let xusername = document.getElementById('Eusername');
    let xemail = document.getElementById('Eemail');
    let xpassword = document.getElementById('Epassword');
    let xpassword2 = document.getElementById('Epassword2');
    let xnumber = document.getElementById('Enumber');
    let xcountry = document.getElementById('Ecountry');
    let xaddress = document.getElementById('EAddress');
    let xdetails = document.getElementById('Edetails');
  
  
    xusername.innerHTML = user.username;
    xemail.innerHTML = user.email;
    xpassword.innerHTML = user.password;
    xnumber.innerHTML = user.number;
    xcountry.innerHTML = user.country;
    xaddress.innerHTML = user.address;
    xdetails.innerHTML = user.details;

  
  }