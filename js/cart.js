/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartyB')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementsByTagName('tbody')[0].innerHTML = '';
  console.log('cleared cart');
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  var tbody = document.getElementsByTagName('tbody')[0];

  for (var i=0; i<cart.items.length; i++) {
    var elTr = makeChild(tbody, 'tr');
    makeChild(elTr, 'td', 'X', 'remove');
    makeChild(elTr, 'td', cart.items[i].product.name);
    makeChild(elTr, 'td', cart.items[i].quantity);
  }
  
  // TODO: Find the table body
  
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  var clickedEl = event.target;
  console.log(clickedEl);

  if (!clickedEl.classList.contains('remove')) {
    return;
  }
  var rem = clickedEl.nextSibling.textContent;
  console.log(rem);
  
  cart.removeItem(findProd(rem));
  cart.saveToLocalStorage();
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();