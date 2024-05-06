
function printError(id,msg){
    document.getElementById(id).innerHTML=msg;
}
// function validate(form){
//     var city=form.city.value;
//     var street=form.street.value;
//     var name=form.name.value;
//     var phone=form.phone.value;

//     let cityErr=true;
//     let streetErr=true;
//     let phoneErr= true;
//     let nameErr=true;

//     if(city == "City") {
//         printError("cityError", "Please select your city");
//     } else {
//         printError("cityError", "");
//         cityErr = false;
//     }

//    if(street==""){
//     printError("streetError","please your street address");
//    }
//    else{
//     var word=/^[a-zA-Z0-9]+$/;
//     if(word.test(street)===false){
//         printError("streetError","please enter a valid street address");
//     }
//     else{
//         printError("streetError","");
//         streetErr=false;
//    } 
//   }
//   if(name==""){
//     printError("nameError","please enter your name");
//   }
//   else{
//     var word=/^[a-zA-Z]+$/;
//     if(word.test(name)===false){
//         printError("nameError","please enter a valid name");
//     }
//     else{
//         printError("nameError","");
//         nameErr=false;
//     }
//   }
//   if(phone==""){
//     printError("phoneError","please enter your phone number");
//   }
//   else{
//     var word=/^[0-9]\d{9}$/;
//     if(word.test(phone)===false){
//         printError("phoneError","please enter a valid 11 digit number");
//     }
//     else{
//         printError("phoneError","");
//         phoneErr=false;
//     }
//   }
//   if((nameErr || phoneErr  || streetErr) == true) {
//     return false;
//  }
// //  else{
// //     var data="your order have been placed!!!!!";
    
// //  }
// }
function change() {
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
//  function display(){
//     let city=document.getElementById("City");
//     let street=document.getElementById("street");
//     let name=document.getElementById("name");
//     let phone=document.getElementById("phone");
//     city.value=user.username;
//  }
window.onload=function(){
    const newValue=sessionStorage.getItem("newValue");
    document.getElementById("to").value=parseFloat(newValue).toFixed(1)+" EGP";
}
