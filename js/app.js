'use strict';
 
// Cart constructor.
var Cart = function(items) {
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  var product = product;
  var quantity = quantity;
  var newCartItem = new CartItem(product, quantity);
  this.items.push(newCartItem);
  
};

Cart.prototype.saveToLocalStorage = function() {
  localStorage.setItem("cartyB", JSON.stringify(cart.items));
};

Cart.prototype.removeItem = function(prodItem) {
  var prodItem = prodItem;
  for (var i=0; i < this.items.length; i++) {
    if (this.items[i].name === prodItem.name) {
      console.log(this.items.splice(i, 1) + 'removed');
    }
  }
  console.log('removed an item. hopefully');
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};

function findProd (prodName) {
  var selectedProd;
  for (var i=0; i<Product.allProducts.length; i++){
    if (Product.allProducts[i].name === prodName) {
      selectedProd = Product.allProducts[i];
      console.log(selectedProd);
    }
  }
  return selectedProd;
}

function makeChild(parent, childElementType, childText, childClass) {
  var el = document.createElement('' + childElementType);
  if (childText) {
      el.textContent = '' + childText;
  }
  if (childClass) {
      el.classList.add('' + childClass);
  }
  parent.appendChild(el);
  return el;
}

Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
