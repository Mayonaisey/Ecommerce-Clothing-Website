const radioGroup = document.getElementById("radio-group");
const size = document.getElementById("dropdown-size");
const producttype = document.getElementById("dropdown-producttype");
var opengen = 0;
var opensize = 0;
var openprod = 0;

function displayGender() {
  if (opengen == 0) {
    radioGroup.style.display = "block";
    opengen = 1;
  } else {
    radioGroup.style.display = "none";
    opengen = 0;
  }
}

function displaySize() {
  if (opensize == 0) {
    size.style.display = "block";
    opensize = 1;
  } else {
    size.style.display = "none";
    opensize = 0;
  }
}
function displayProduct() {
  if (openprod == 0) {
    producttype.style.display = "block";
    openprod = 1;
  } else {
    producttype.style.display = "none";
    openprod = 0;
  }
}

var clothes = [
  {
    id: "prod0",
    gender: "men",
    type: "jeans",
    name: "780 Men's Jogger Jeans",
    image_path: "images/men/l_20241-s4fi43z8-m0u-93-75-91-182_a.webp",
    image_path2: "images/men/blackjeans.webp",
    image_path3:"images/men/black-pants.webp",
    price: "999.00",
    size: ["S", "M", "L"],
    quantity: 25,
    

  },
  {
    id: "prod1",
    gender: "men",
    type: "jeans",
    name: "750 Slim Fit Men's Denim Trousers",
    image_path: "images/men/l_20232-w3dr37z8-h45_u.webp",
    price: "999.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod2",
    gender: "men",
    type: "jeans",
    name: "770 Super Skinny Men's Denim",
    image_path: "images/men/l_20232-w3dr79z8-309_u.webp",
    price: "970.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod3",
    gender: "men",
    type: "t-shirt",
    name: "Crew Neck Short Sleeve Men's T-shirt",
    image_path: "images/men/l_20232-w32977z8-lal-91-78-95-189_a.webp",
    price: "399.00",
    size: ["S", "M", "L"],
    quantity: 25,
    image_path2:"images/men/gray-tshirt.webp"
  },
  {
    id: "prod4",
    gender: "men",
    type: "t-shirt",
    name: "Polo Neck Short Sleeve Patterned Pike Men's T-shirt",
    image_path: "images/men/l_20241-s4io96z8-lqq-98-78-92-187_a.webp",
    price: "499.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod5",
    gender: "men",
    type: "sweatshirt",
    name: "Crew Neck Long Sleeve Men's Sweatshirt",
    image_path: "images/men/l_20241-s41484z8-cvl-97-78-96-188_a.webp",
    price: "899.00",
    size: ["S", "M", "L", "XL"],
    quantity: 25,
    image_path2:"images/men/black-sweatshirt.webp"
  },
  {
    id: "prod6",
    gender: "men",
    type: "sweatshirt",
    name: "Crew Neck Long Sleeve Men's Sweatshirt",
    image_path: "images/men/l_20241-s41484z8-v9v-97-78-96-188_a.webp",
    price: "899.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod7",
    gender: "men",
    type: "sweatshirt",
    name: "Crew Neck Long Sleeve Men's Sweatshirt",
    image_path: "images/men/l_20241-s41484z8-ven-99-76-96-188_a.webp",
    price: "899.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod8",
    gender: "women",
    type: "dress",
    name: "Square Collar Straight Strap Poplin Women's Dress",
    image_path: "images/women/l_20231-s3ec25z8-rql-84-59-91-175_a.webp",
    price: "1.349.10",
    size: ["S", "M", "L", "XL"],
    quantity: 25,
    image_path2:"images/women/black_dress.webp"
  },
  {
    id: "prod9",
    gender: "women",
    type: "dress",
    name: "Crew Neck Patterned Long Sleeve Women's Dress",
    image_path: "images/women/l_20241-s4hm69z8-lqq-83-59-90-174_a.webp",
    price: "899.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod10",
    gender: "women",
    type: "t-shirt",
    name: "Crew Neck Printed Short Sleeve Women's T-shirt",
    image_path: "images/women/black_tshirt.webp",
    price: "249.00",
    size: ["S", "M", "L", "XL"],
    quantity: 25,
    image_path2:"images/women/black-tshirt.webp" 
  },
  {
    id: "prod11",
    gender: "women",
    type: "t-shirt",
    name: "Crew Neck Printed Short Sleeve Women's T-shirt",
    image_path: "images/women/purple_tshirt.webp",
    price: "299.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod12",
    gender: "women",
    type: "blouse",
    name: "Crew Neck Patterned Long Sleeve Women's Blouse",
    image_path: "images/women/l_20232-w3da40z8-h6z-87-60-90-175_a.webp",
    price: "419,40",
    size: ["S", "M", "L"],
    quantity: 25,
    image_path2:"images/women/green_shirt2.webp",
    image_path3:"images/women/green_blouse3.webp"
  },
  {
    id: "prod13",
    gender: "women",
    type: "blouse",
    name: "Boat Collar Straight Short Sleeve Women's Blouse",
    image_path: "images/women/white_blouse.webp",
    price: "639,20",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod14",
    gender: "women",
    type: "blouse",
    name: "Boat Collar Straight Long Sleeve Women's Blouse",
    image_path: "images/women/l_20231-s3jm35z8-r9j-84-59-91-175_a.webp",
    price: "54.99",
    size: ["S", "M", "L", "XL"],
    quantity: 25,
  },
  {
    id: "prod15",
    gender: "women",
    type: "trousers",
    name: "Elastic Waist Patterned Women's Palazzo Trousers",
    image_path: "images/women/l_20241-s4au41z8-sw5-83-60-90-176_a.webp",
    price: "799.00",
    size: ["S", "M", "L"],
    quantity: 25,
    image_path2:"images/women/pattern_pants.webp",
    image_path3:"images/women/pattern-pants3.webp"
  },
  {
    id: "prod16",
    gender: "women",
    type: "trousers",
    name: "Women's Elastic Waist Straight Knitwear Trousers",
    image_path: "images/women/set_trousers_beige.webp",
    price: "899,40",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod17",
    gender: "women",
    type: "trousers",
    name: "Elastic Waist Comfortable Fit Muslin Women's Trousers",
    image_path: "images/women/black_trousers.webp",
    price: "799.00",
    size: ["S", "M", "L", "XL"],
    quantity: 25,
  },
  {
    id: "prod18",
    gender: "women",
    type: "slippers",
    name: "Single Band Women's Slippers",
    image_path: "images/women/l_20241-s4i215z8-j5e_a.webp",
    price: "499.00",
    size: ["S", "M", "L"],
    quantity: 25,
    image_path2:"images/women/slippers-white2.webp"

  },
  {
    id: "prod19",
    gender: "women",
    type: "slippers",
    name: "Single Band Women's Slippers",
    image_path: "images/women/l_20241-s4i215z8-cr8_a.webp",
    price: "499.00",
    size: ["S", "M"],
    quantity: 25,
  },
  {
    id: "prod20",
    gender: "girls",
    type: "dress",
    name: "U Neck Patterned Short Sleeve Girls' Dress",
    image_path: "images/kids/l_20231-s3bc30z4-lqq_a.webp",
    price: "769,30",
    size: ["S", "M", "L"],
    quantity: 25,
    image_path2:"images/women/slippers-white2.webp",
    image_path3:"images/kids/blue-dress.webp"

  },
  {
    id: "prod21",
    gender: "girls",
    type: "dress",
    name: "Square Neck Short Sleeve Girls Dress",
    image_path: "images/kids/l_20231-s3dq62z4-grm_a.webp",
    price: "1.189,30",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod22",
    gender: "girls",
    type: "dress",
    name: "Kids Square Collar Girl Jean Salopet Dress",
    image_path: "images/kids/l_20232-w31234z4-h45-123-23_5.webp",
    price: "1099,00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "pro23",
    gender: "girls",
    type: "t-shirt",
    name: "Crew Neck Basic Short Sleeve Girls T-Shirt",
    image_path: "images/kids/l_20241-s42363z4-g5t_a.webp",
    price: "149.00",
    size: ["S", "M"],
    quantity: 25,
  },
  {
    id: "prod24",
    gender: "girls",
    type: "t-shirt",
    name: "Crew Neck Basic Short Sleeve Girls T-Shirt",
    image_path: "images/kids/l_20241-s42363z4-cvl_a.webp",
    price: "149.00",
    size: ["S", "M", "L"],
    quantity: 25,
  },
  {
    id: "prod25",
    gender: "girls",
    type: "t-shirt",
    name: "Crew Neck Basic Short Sleeve Girls T-Shirt",
    image_path: "images/kids/l_20241-s42363z4-grl_a.webp",
    price: "54.99",
    size: ["S", "M"],
    quantity: 25,
  },
];
let products=clothes;
const productContainer = document.getElementById("product-container");

///////////////////////////////////trying to tie homepage to productsPage//////////////////////////////////////
// let buttonClicked="hi";
// let anchors=document.getElementsByClassName("home-anchor");
// for(let i=0; i<anchors.length; i++){
//     anchors[i].addEventListener("click", ()=>{
//       changeButton(anchors[i].textContent);
//     });
// }

function makeCards(productsList) {
  // let j = 0;
  productsList.forEach(function (product) {
    // Create product div
    var btn = document.createElement("button");
    // btn.id = "prod" + j;
    btn.classList.add("card");
    // Add product details
    var image = document.createElement("img");
    image.src = product.image_path;
    image.classList.add("img");
    btn.appendChild(image);

    var tooltiptext = document.createElement("span");
    tooltiptext.textContent = product.name;
    tooltiptext.classList.add("tooltiptext");
    btn.appendChild(tooltiptext);

    var name = document.createElement("p");
    name.textContent = product.name;
    name.classList.add("text");
    btn.appendChild(name);

    var price = document.createElement("p");
    price.textContent = "Price: " + product.price + " EGP";
    price.classList.add("price");
    btn.appendChild(price);

    var sizes = document.createElement("p");
    sizes.textContent = "Sizes: " + product.size.join(", ");
    sizes.classList.add("sizes");
    btn.appendChild(sizes);

    // Append product div to container
    btn.addEventListener("click", () => {
      showItem(product.id);
    });
    productContainer.appendChild(btn);
    // j++;
  });
  window.history.pushState({ id: 1 }, null, null);
}
makeCards(products);

function filterProducts() {
  let fileteredProducts = new Set([]);
  productContainer.innerHTML = "";
  for (let i = 0; i < clothes.length; i++) {
    if (
      clothes[i].gender.toUpperCase() == genderSelected.toUpperCase() &&
      clothes[i].type.toUpperCase() == prodSelected.toUpperCase()
    ) {
      for (let j = 0; j < clothes[i].size.length; j++) {
        if (clothes[i].size[j].toUpperCase == sizeSelected.toUpperCase) {
          fileteredProducts.add(clothes[i]);
        }
      }
    }
  }
  makeCards(fileteredProducts);
  if (productContainer.innerHTML == "") {
    var name = document.createElement("p");
    name.textContent = "No searches found..";
    name.classList.add("text");
    productContainer.appendChild(name);
  }
}
let sizeIsSelected=0;//to check if a size is selected or not
function showItem(id) {
  
  let number = parseInt(extractNumber(id));
  var product = document.createElement("div");
  product.classList.add("productDetails");

  var photosContainer = document.createElement("div");
  photosContainer.classList.add("photosContainer");

  var image = document.createElement("img");
  image.src = clothes[number].image_path;
  image.classList.add("image");
  photosContainer.appendChild(image);
  var image2 = document.createElement("img");
  image2.src = clothes[number].image_path2;
  image2.classList.add("image");
  photosContainer.appendChild(image2);
  var image3 = document.createElement("img");
  image3.src = clothes[number].image_path3;
  image3.classList.add("image");
  photosContainer.appendChild(image3);

  var details = document.createElement("div");
  details.classList.add("details");

  var heartIcon = document.createElement("i");
  heartIcon.innerHTML =
    '<a><i class="fa-regular fa-heart"></i></a>';
  details.appendChild(heartIcon);

  var name = document.createElement("p");
  name.classList.add("name");
  name.textContent = clothes[number].name;
  details.appendChild(name);

  var gender = document.createElement("p");
  gender.textContent = clothes[number].gender;
  details.appendChild(gender);

  var itemSizes = document.createElement("p");
  itemSizes.classList.add("itemSizes");
  for (let i = 0; i < clothes[number].size.length; i++) {
    console.log(clothes[number].size[i]);
    var sizesButtons = document.createElement("button");
    sizesButtons.textContent=clothes[number].size[i];
    sizesButtons.classList.add("sizesButtons");
    sizesButtons.id="size"+i;
    sizesButtons.addEventListener("click", () => {
      colorUp("size"+i);
    });
    itemSizes.appendChild(sizesButtons);
  }
  details.appendChild(itemSizes);

  var quantityDiv = document.createElement("div");
  quantityDiv.classList.add("quantityDiv");
  var quantity = document.createElement("p");
  quantity.textContent = "1";
  quantity.id = "quantityID";

  var quantityBtn = document.createElement("button");
  quantityBtn.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
  quantityBtn.classList.add("quantityBtn");
  quantityBtn.addEventListener("click", () => {
    incNumber("quantityID");
  });

  var quantityDownBtn = document.createElement("button");
  quantityDownBtn.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
  quantityDownBtn.classList.add("quantityBtn");
  quantityDownBtn.addEventListener("click", () => {
    decNumber("quantityID");
  });

  quantityDiv.appendChild(quantity);
  quantityDiv.appendChild(quantityDownBtn);
  quantityDiv.appendChild(quantityBtn);
  details.appendChild(quantityDiv);

  var price = document.createElement("p");
  price.classList.add("itemPrice");
  price.textContent = clothes[number].price + " EGP";
  details.appendChild(price);

  var addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("addToCartBtn");
  addToCartBtn.textContent = "Add To Cart";
  addToCartBtn.addEventListener("click", () => {
    //if size is selected and quantity>0
    if(sizeIsSelected==1){
    incCartNumber("Cart-Quantity");}
    else{
      alert("You should choose Size and Quantity");
    }
  });
  addToCartBtn.addEventListener("click", () => {
    addToArray(number);
  });
  details.appendChild(addToCartBtn);

  product.appendChild(photosContainer);
  product.appendChild(details);

  //append photos div and details div on productdetails and productdetails to page div
  let fullpage = document.getElementById("fullpage");
  fullpage.innerHTML = "";

  // var continueShoppingDiv=document.createElement("div");
  var continueShopping = document.createElement("button");
  continueShopping.id="continueShopping";
  continueShopping.textContent="Continue Shopping";
  continueShopping.addEventListener("click", function(){
    
    window.open("productsPage.html", "_self");
    printDetails();

  });

  // continueShopping.innerHTML='<a href="productsPage.html">Continue Shopping</a>';
  fullpage.appendChild(continueShopping);
  fullpage.appendChild(product);
}
function extractNumber(id) {
  let str = id;
  let number = str.match(/\d+/g);
  return number;
}


function colorUp(id) {
  let sizesButtons=document.getElementsByClassName("sizesButtons");
  for(let i=0; i<sizesButtons.length; i++){
    if(document.getElementById("size"+i).style.backgroundColor=="rgb(0, 58, 205)"){
      document.getElementById("size"+i).style.backgroundColor="white"
    }
  }
  document.getElementById(id).style.backgroundColor="rgb(0, 58, 205)";
  sizeIsSelected=1;
}
let genderSelected = "hi";
let sizeSelected = "hi";
let prodSelected = "hi";

function searchProduct() {
  let gen = document.getElementsByName("gender");
  let siz = document.getElementsByName("size");
  let prod = document.getElementsByName("prod");

  for (let i = 0; i < gen.length; i++) {
    if (gen[i].checked) {
      genderSelected = gen[i].value;
    }
  }
  for (let i = 0; i < siz.length; i++) {
    if (siz[i].checked) {
      sizeSelected = siz[i].value;
    }
  }
  for (let i = 0; i < prod.length; i++) {
    if (prod[i].checked) {
      prodSelected = prod[i].value;
    }
  }
  if (genderSelected == "hi" || sizeSelected == "hi" || prodSelected == "hi") {
    alert("You should enter 3 filters");
    return;
  }
  filterProducts();
}



// let counter = document.getElementById("counter")
// counter.addEventListener("click", func);
function incNumber(id) {
  var quantity = document.getElementById(id);
  let number = parseInt(quantity.innerText);
  quantity.innerHTML = number + 1;
}
function decNumber(id) {
  var quantity = document.getElementById(id);
  let number = parseInt(quantity.innerText);
  if (number > 0) quantity.innerHTML = number - 1;
}

function incCartNumber(CartId) {
  var quantitySelected = document.getElementById("quantityID");
  let number = parseInt(quantitySelected.innerText);

  var Cart = document.getElementById(CartId);
  let CartQuantity = parseInt(Cart.innerText);
  Cart.innerHTML = number + CartQuantity;
}

function addToArray(index){
  let quantity=document.getElementById("quantityID");
let number=parseInt(quantity.textContent);

let sizesButtons=document.getElementsByClassName("sizesButtons");
let sizeChosen="f";
  for(let i=0; i<sizesButtons.length; i++){
    if(document.getElementById("size"+i).style.backgroundColor=="rgb(0, 58, 205)"){
      sizeChosen=document.getElementById("size"+i).textContent;
      console.log(document.getElementById("size"+i).textContent +" is the size chosen");
    }
  }
  
  cart.push({
    gender:clothes[index].gender ,size:sizeChosen,price:clothes[index].price,
    type: clothes[index].type, name: clothes[index].name, quantity:number,image:clothes[index].image_path});
    localStorage.setItem('cart', JSON.stringify(cart));
}

function printDetails(){
  let storedCart = JSON.parse(localStorage.getItem('cart'));
  for(let i=0; i<storedCart.length; i++){
    console.log(storedCart[i].gender + storedCart[i].size + storedCart[i].price + storedCart[i].type + storedCart[i].name + storedCart[i].quantity + storedCart[i].image);
  }
  
}
let quantity=0;
if(cart.length>0){
    for(let i=0; i<cart.length; i++){
        quantity+=cart[i].quantity;
    }
  var Cart = document.getElementById("Cart-Quantity");
  Cart.innerHTML = quantity;
}

function clearCart(){  cart=[];
  localStorage.removeItem('cart');
//and cart-quantity=0
var Cart = document.getElementById("Cart-Quantity");
Cart.innerHTML = "0";
}
  
//onclick on cart icon, pass the cart values to another localstorage that deals with checkout and then empty the cart

//changeButton function fills an array with products of the anchor chosen in homepage and displays the products
// function changeButton(text){
//   let products = [];
//   buttonClicked=text;
//   console.log(buttonClicked);
//   clothes.forEach(element => {
//     if(element.gender.toLowerCase()==buttonClicked.toLowerCase()){
//       console.log(element.name);
//       products.push(element);
//     }
//   });
//   makeCards(products);
// }
// window.addEventListener("popstate", detectHistory);
// history.pushState(null, null, window.location.pathname);
// function detectHistory() {}
