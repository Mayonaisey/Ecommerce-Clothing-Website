const min=document.getElementById('min');
const plus=document.getElementById('plus');
const priceInput=document.getElementById('price');
const quantityInput=document.getElementById('quantity'); 
const tp=document.getElementById("Tprice");
// const dis=document.getElementById("dis");
const grand=document.getElementById("grand");
const disc=document.getElementById("dis");
var price=document.getElementsByClassName("pr");
  let initialTotal=0;
  for(var i=0;i<price.length;i++){
    initialTotal+=parseFloat(price[i].value);
  }
 tp.value=initialTotal.toFixed(1)+" EGP";
 grand.value=parseFloat(tp.value)-(parseFloat(tp.value)*(parseFloat(disc.value)/100)).toFixed(1)+"EGP";

  min.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      updatePrice();
    }
  });
  plus.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updatePrice();
    
  });
  // Update price based on quantity
  function updatePrice() {
    const price = 100// Set the base price here
    const quantity =parseFloat(quantityInput.value);
    priceInput.value = price * quantity +" EGP";
    tp.value=parseFloat(priceInput.value+initialTotal).toFixed(1)+" EGP";
    grand.value=parseFloat(tp.value)-(parseFloat(tp.value)*(parseFloat(disc.value)/100)).toFixed(1)+"EGP";
  }
  ////SHA8ALAAAAAAAAA
// document.getElementById("delete").addEventListener("click",function(){
//  var big=document.getElementById("parent");
//  big.parentNode.removeChild(big);
// });

// var price=document.getElementsByClassName("pr");
// const initialTotal=0;
// for(var i=0;i<price.length;i++){
//   initialTotal+=parseFloat(price[i].value);
// }
// document.getElementById("Tprice").value=initialTotal.toFixed(2);

 var deletebt=document.getElementsByClassName("delete");
 for(var i=0;i<deletebt.length;i++){
   deletebt[i].addEventListener("click",function(){
     var product=this.closest(".listcart");
     product.parentNode.removeChild(product);
     tp.value=parseFloat(initialTotal-priceInput.value);
    });
  } 

  // function wish(){
  //   //adds it to the wish list
  // }
  // const tPriceInput = document.getElementById("Tprice");

  function passValue() {
    const grandInput = document.getElementById("grand");
    const newValue =grandInput.value;
    sessionStorage.setItem("newValue", newValue);
  }