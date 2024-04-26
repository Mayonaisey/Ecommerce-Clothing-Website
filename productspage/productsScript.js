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

var clothes = {
  products: [
    {
      gender: "male",
      type: "jeans",
      name: "780 Men's Jogger Jeans",
      image_path: "images/men/l_20241-s4fi43z8-m0u-93-75-91-182_a.webp",
      price: "999.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "male",
      type: "jeans",
      name: "750 Slim Fit Men's Denim Trousers",
      image_path: "images/men/l_20232-w3dr37z8-h45_u.webp",
      price: "999.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "male",
      type: "jeans",
      name: "770 Super Skinny Men's Denim",
      image_path: "images/men/l_20232-w3dr79z8-309_u.webp",
      price: "970.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "male",
      type: "t-shirt",
      name: "Crew Neck Short Sleeve Men's T-shirt",
      image_path: "images/men/l_20232-w32977z8-lal-91-78-95-189_a.webp",
      price: "399.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "male",
      type: "t-shirt",
      name: "Polo Neck Short Sleeve Patterned Pike Men's T-shirt",
      image_path: "images/men/l_20241-s4io96z8-lqq-98-78-92-187_a.webp",
      price: "499.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "male",
      type: "sweatshirt",
      name: "Crew Neck Long Sleeve Men's Sweatshirt",
      image_path: "images/men/l_20241-s41484z8-cvl-97-78-96-188_a.webp",
      price: "899.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "male",
      type: "sweatshirt",
      name: "Crew Neck Long Sleeve Men's Sweatshirt",
      image_path: "images/men/l_20241-s41484z8-v9v-97-78-96-188_a.webp",
      price: "899.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "male",
      type: "sweatshirt",
      name: "Crew Neck Long Sleeve Men's Sweatshirt",
      image_path: "images/men/l_20241-s41484z8-ven-99-76-96-188_a.webp",
      price: "899.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "dress",
      name: "Square Collar Straight Strap Poplin Women's Dress",
      image_path: "images/women/l_20231-s3ec25z8-rql-84-59-91-175_a.webp",
      price: "1.349.10",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "dress",
      name: "Crew Neck Patterned Long Sleeve Women's Dress",
      image_path: "images/women/l_20241-s4hm69z8-lqq-83-59-90-174_a.webp",
      price: "899.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "t-shirt",
      name: "Crew Neck Printed Short Sleeve Women's T-shirt",
      image_path: "images/women/black_tshirt.webp",
      price: "249.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "t-shirt",
      name: "Crew Neck Printed Short Sleeve Women's T-shirt",
      image_path: "images/women/purple_tshirt.webp",
      price: "299.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "blouse",
      name: "Crew Neck Patterned Long Sleeve Women's Blouse",
      image_path: "images/women/l_20232-w3da40z8-h6z-87-60-90-175_a.webp",
      price: "419,40",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "blouse",
      name: "Boat Collar Straight Short Sleeve Women's Blouse",
      image_path: "images/women/white_blouse.webp",
      price: "639,20",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "blouse",
      name: "Boat Collar Straight Long Sleeve Women's Blouse",
      image_path: "images/women/l_20231-s3jm35z8-r9j-84-59-91-175_a.webp",
      price: "54.99",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "trousers",
      name: "Elastic Waist Patterned Women's Palazzo Trousers",
      image_path: "images/women/l_20241-s4au41z8-sw5-83-60-90-176_a.webp",
      price: "799.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "trousers",
      name: "Women's Elastic Waist Straight Knitwear Trousers",
      image_path: "images/women/set_trousers_beige.webp",
      price: "899,40",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "trousers",
      name: "Elastic Waist Comfortable Fit Muslin Women's Trousers",
      image_path: "images/women/black_trousers.webp",
      price: "799.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "slippers",
      name: "Single Band Women's Slippers",
      image_path: "images/women/l_20241-s4i215z8-j5e_a.webp",
      price: "499.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "female",
      type: "slippers",

      name: "Single Band Women's Slippers",
      image_path: "images/women/l_20241-s4i215z8-cr8_a.webp",
      price: "499.00",
      size: ["S", "M", "L"],
    },
    {
      gender: "girls",
      type: "dress",
      name: "U Neck Patterned Short Sleeve Girls' Dress",
      image_path: "images/kids/l_20231-s3bc30z4-lqq_a.webp",
      price: "769,30",
      size: ["9", "10", "11", "12"],
    },
    {
      gender: "girls",
      type: "dress",
      name: "Square Neck Short Sleeve Girls Dress",
      image_path: "images/kids/l_20231-s3dq62z4-grm_a.webp",
      price: "1.189,30",
      size: ["9", "10", "11", "12"],
    },
    {
      gender: "girls",
      type: "dress",
      name: "Kids Square Collar Girl Jean Salopet Dress",
      image_path: "images/kids/l_20232-w31234z4-h45-123-23_5.webp",
      price: "1099,00",
      size: ["9", "10", "11", "12"],
    },
    {
      gender: "girls",
      type: "t-shirt",
      name: "Crew Neck Basic Short Sleeve Girls T-Shirt",
      image_path: "images/kids/l_20241-s42363z4-g5t_a.webp",
      price: "149.00",
      size: ["9", "10", "11", "12"],
    },
    {
      gender: "girls",
      type: "t-shirt",
      name: "Crew Neck Basic Short Sleeve Girls T-Shirt",
      image_path: "images/kids/l_20241-s42363z4-cvl_a.webp",
      price: "149.00",
      size: ["9", "10", "11", "12"],
    },
    {
      gender: "girls",
      type: "t-shirt",
      name: "Crew Neck Basic Short Sleeve Girls T-Shirt",
      image_path: "images/kids/l_20241-s42363z4-grl_a.webp",
      price: "54.99",
      size: ["9", "10", "11", "12"],
    },
  ],
};
const productsList = clothes.products;
const productContainer = document.getElementById("product-container");

productsList.forEach(function (product) {
  // Create product div
  var productDiv = document.createElement("div");
  productDiv.classList.add("card");

  // Add product details
  var image = document.createElement("img");
  image.src = product.image_path;
  productDiv.appendChild(image);

  var name = document.createElement("p");
  name.textContent = product.name;
  productDiv.appendChild(name);

  var price = document.createElement("p");
  price.textContent = "Price: " + product.price + " EGP";
  productDiv.appendChild(price);

  var sizes = document.createElement("p");
  sizes.textContent = "Sizes: " + product.size.join(", ");
  productDiv.appendChild(sizes);

  // Append product div to container
  productContainer.appendChild(productDiv);
});
function searchProduct() {
  if (document.getElementById("prod1").checked) {
    productContainer.innerHTML =
      document.getElementById("prod1").value + " radio button checked";
  } else if (document.getElementById("prod2").checked) {
    productContainer.innerHTML =
      document.getElementById("prod2").value + " radio button checked";
  } else if (document.getElementById("prod3").checked) {
    productContainer.innerHTML =
      document.getElementById("prod3").value + " radio button checked";
  } else if (document.getElementById("prod4").checked) {
    productContainer.innerHTML =
      document.getElementById("prod4").value + " radio button checked";
  } else if (document.getElementById("prod5").checked) {
    productContainer.innerHTML =
      document.getElementById("prod5").value + " radio button checked";
  }else if (document.getElementById("prod6").checked) {
    productContainer.innerHTML =
      document.getElementById("prod6").value + " radio button checked";
  }else if (document.getElementById("prod7").checked) {
    productContainer.innerHTML =
      document.getElementById("prod7").value + " radio button checked";
  } else {
    productContainer.innerHTML = "No one selected";
  }
}
