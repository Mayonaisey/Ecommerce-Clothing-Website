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

  
 let xusername, xemail, xpassword, xnumber, xcountry, xaddress, xdetails;

 function change() {
     xusername = document.getElementById('Eusername');
     xemail = document.getElementById('Eemail');
     xpassword = document.getElementById('Epassword');
     xnumber = document.getElementById('Enumber');
     xcountry = document.getElementById('Ecountry');
     xaddress = document.getElementById('EAddress');
     xdetails = document.getElementById('Edetails');
  
  
    xusername.innerHTML = user.username;
    xemail.innerHTML = user.email;
    xpassword.innerHTML = user.password;
    xnumber.innerHTML = user.number;
    xcountry.innerHTML = user.country;
    xaddress.innerHTML = user.address;
    xdetails.innerHTML = user.details;

    document.getElementById('editButton').style.display = 'inline-block';

    //document.getElementsByClassName('edit').style.display = 'block';

  }
  //this function is by and for fatema hany
    function display(){
  let city=document.getElementById("City");
  let street=document.getElementById("st");
  let name=document.getElementById("Name");
  let phone=document.getElementById("Phone");
  city.value=user.contery;
  street.value=user.address;
  name.value=user.username;
  phone.value=user.number;
}
  function edit(){

    
      document.getElementById('newusername').style.display = 'block';
      document.getElementById('newemail').style.display = 'block';
      document.getElementById('newpassword').style.display = 'block';
      document.getElementById('newnumber').style.display = 'block';
      document.getElementById('newcountry').style.display = 'block';
      document.getElementById('newaddress').style.display = 'block';
      document.getElementById('newdetails').style.display = 'block';

      document.getElementById('saveButton').style.display = 'inline-block';

    
}

function save() {
  let editedUsername = document.getElementById('newusername').value.trim();
  let editedEmail = document.getElementById('newemail').value.trim();
  let editedPassword = document.getElementById('newpassword').value.trim();
  let editedNumber = document.getElementById('newnumber').value.trim();
  let editedCountry = document.getElementById('newcountry').value.trim();
  let editedAddress = document.getElementById('newaddress').value.trim();
  let editedDetails = document.getElementById('newdetails').value.trim();

  if (editedUsername !== '') {
    user.username = editedUsername;
    xusername.innerHTML = editedUsername;
  }

  if (editedEmail !== '') {
    user.email = editedEmail;
    xemail.innerHTML = editedEmail;
  }

  if (editedPassword !== '') {
    user.password = editedPassword; 
    xpassword.innerHTML = editedPassword;
  }

  if (editedNumber !== '') {
    user.number = editedNumber;
    xnumber.innerHTML = editedNumber;
  }

  if (editedCountry !== '') {
    user.country = editedCountry;
    xcountry.innerHTML = editedCountry;
  }

  if (editedAddress !== '') {
    user.address = editedAddress;
    xaddress.innerHTML = editedAddress;
  }

  if (editedDetails !== '') {
    user.details = editedDetails;
    xdetails.innerHTML = editedDetails;
  }

  document.getElementById('newusername').style.display = 'none';
  document.getElementById('newemail').style.display = 'none';
  document.getElementById('newpassword').style.display = 'none';
  document.getElementById('newnumber').style.display = 'none';
  document.getElementById('newcountry').style.display = 'none';
  document.getElementById('newaddress').style.display = 'none';
  document.getElementById('newdetails').style.display = 'none';
  document.getElementById('saveButton').style.display = 'none';
  
}
let city ,street,name,phone;
function dispaly(){ 
city=document.getElementById("City");
street=document.getElementById("st");
name=document.getElementById("Name");
phone=document.getElementById("Phone");
city.value=user.country;
street.value=user.address;
name.value=user.username;
phone.value=user.number;
}