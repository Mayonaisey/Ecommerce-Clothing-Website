// let output = document.getElementById("totalprice");

//          let str = "Sampll323435 Stringrfd23232ftesd3454!";
//          output.innerHTML = "Original String: " + str + "<br/>";
//          let numbers = str.match(/\d+/g);
//          if (numbers.length > 0) {
//             output.innerHTML += "<br> Numbers in the StringL: " + numbers + "<br/>";
//          }

const radioGroup = document.getElementById("radio-group");
const size = document.getElementById("dropdown-size");
const producttype = document.getElementById("dropdown-producttype");
var opengen=0;
var opensize=0;
var openprod=0;

function displayGender() {
    if(opengen==0){  radioGroup.style.display = 'block'; opengen=1;}
    else{ radioGroup.style.display = 'none'; opengen=0;}
}

function displaySize() {
    if(opensize==0){  size.style.display = 'block'; opensize=1;}
    else{ size.style.display = 'none'; opensize=0;}
}
function displayProduct() {
    if(openprod==0){  producttype.style.display = 'block'; openprod=1;}
    else{ producttype.style.display = 'none'; openprod=0;}
}
let footer=document.getElementsByClassName("footer");

