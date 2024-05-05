

console.log('file loaded');
let xusername = document.getElementById('Eusername');
    let xemail = document.getElementById('Eemail');
    let xpassword = document.getElementById('Epassword');
    let xpassword2 = document.getElementById('Epassword2');
    let xnumber = document.getElementById('Enumber');
    let xcountry = document.getElementById('Ecountry');
    let xaddress = document.getElementById('EAddress');
    let xdetails = document.getElementById('Edetails');
  
  
  function change(){
  
    Console.log('function triggered');
    xusername.innerHTML = user.username;
    xemail.innerHTML = user.email;
    xpassword.innerHTML = user.password;
    xpassword2.innerHTML = user.password2;
    xnumber.innerHTML = user.number;
    xcountry.innerHTML = user.country;
    xaddress.innerHTML = user.address;
    xdetails.innerHTML = user.details;

  
  }

