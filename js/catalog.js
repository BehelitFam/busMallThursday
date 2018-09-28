/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

var selectedItem;
var selectedQuantity;
var cartCounter = 0;

var cartCont = document.getElementById('cartContents');

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = makeChild(selectElement, 'option', Product.allProducts[i].name);
    optionEl.value = Product.allProducts[i].name;
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  selectedItem = event.target.items.value;
  console.log(selectedItem);
  selectedQuantity = parseInt(event.target.quantity.value, 10);
  
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}



function addSelectedItemToCart() {
  
  cart.addItem(findProd(selectedItem), selectedQuantity);
  
}

function updateCounter() {
  cartCounter += selectedQuantity;
  document.getElementById("itemCount").textContent = cartCounter;
}

function updateCartPreview() {
  var storedContents = JSON.parse(localStorage.getItem('cartyB'));
  console.log(storedContents);
  cartCont.innerHTML = '';
  makeChild(cartCont, 'h2', 'Your cart');
  
  var elUl = makeChild(cartCont, 'ul');

  for (var i=0; i<storedContents.length; i++) {
    // var elLi = document.createElement('li');

    // elLi.textContent = '' + storedContents[i].product.name + ': ' + storedContents[i].quantity;
    // elUl.appendChild(elLi);
    makeChild(elUl, 'li', '' + storedContents[i].product.name + ': ' + storedContents[i].quantity)
  }
}
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
