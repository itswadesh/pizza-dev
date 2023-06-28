function updateTotal() {
  // Code to update the total price based on selected options and quantity
  var quantity = parseInt(document.getElementById("quantity").value);
  var sizePrice = parseFloat(getSelectedRadioValue("size"));
  var crustPrice = parseFloat(getSelectedRadioValue("crust"));
  var saucePrice = parseFloat(getSelectedRadioValue("sauce"));
  var cheesePrice = parseFloat(getSelectedRadioValue("cheese"));
  var toppingsPrice = parseFloat(getSelectedCheckboxesTotal("toppings"));
  var beveragePrice = parseFloat(getSelectedCheckboxesTotal("beverage"));
  var addmorePrice = parseFloat(getSelectedCheckboxesTotal("addmore"));

  var TotalPrice = (sizePrice + crustPrice + saucePrice + cheesePrice + toppingsPrice + beveragePrice + addmorePrice) * quantity;
  var discount = TotalPrice * 0.25;
  var discountedPrice = TotalPrice - discount;

  document.getElementById("total").innerText = "Total Price: ₹" + TotalPrice.toFixed(2);
  document.getElementById("discount").innerText = "Discounted Price: ₹" + discountedPrice.toFixed(2);
}

function getSelectedRadioValue(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return '0';
}

function getSelectedCheckboxesTotal(name) {
  var checkboxes = document.getElementsByName(name);
  var total = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      total += parseFloat(checkboxes[i].value);
    }
  }
  return total;
}

function showOrderForm() {

  document.getElementById("orderConfirmation").innerHTML = ""; // Clear order confirmation details
  document.getElementById("orderForm").style.display = "block";

}

function placeOrder() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address = document.getElementById("address").value;
  var quantity = parseInt(document.getElementById("quantity").value);

  var size = getSelectedRadioText("size");
  var crust = getSelectedRadioText("crust");
  var sauce = getSelectedRadioText("sauce");
  var cheese = getSelectedRadioText("cheese");
  var toppings = getSelectedCheckboxes("toppings");
  var beverage = getSelectedCheckboxes("beverage");
  var addmore = getSelectedCheckboxes("addmore");


  var sizePrice = parseFloat(getSelectedRadioValue("size"));
  var crustPrice = parseFloat(getSelectedRadioValue("crust"));
  var saucePrice = parseFloat(getSelectedRadioValue("sauce"));
  var cheesePrice = parseFloat(getSelectedRadioValue("cheese"));
  var toppingsPrice = parseFloat(getSelectedCheckboxesTotal("toppings"));
  var beveragePrice = parseFloat(getSelectedCheckboxesTotal("beverage"));
  var addmorePrice = parseFloat(getSelectedCheckboxesTotal("addmore"));


  var sizeSubtotal = sizePrice * quantity;
  var crustSubtotal = crustPrice * quantity;
  var sauceSubtotal = saucePrice * quantity;
  var cheeseSubtotal = cheesePrice * quantity;
  var toppingsSubtotal = toppingsPrice * quantity;
  var beverageSubtotal = beveragePrice * quantity;
  var addmoreSubtotal = addmorePrice * quantity;

  var TotalPrice = sizeSubtotal + crustSubtotal + sauceSubtotal + cheeseSubtotal + toppingsSubtotal + beverageSubtotal + addmoreSubtotal;
  var discount = TotalPrice * 0.25;
  var discountedPrice = TotalPrice - discount;

  var orderDetails = "Name: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Phone Number: " + phoneNumber + "<br><br>" +
    "Customer's Address: " + address + "<br><br>" +
    "Vendor's Address: Housing Board 4th Lane" + "<br>" + "Contact: 9153848234" + "<br><br>" +
    "Quantity: " + quantity + "<br> " +
    "Size: " + size + " (₹" + sizePrice.toFixed(2) + ")" + " * " + quantity + " = ₹" + sizeSubtotal.toFixed(2) + "<br>" +
    "Crust: " + crust + " (₹" + crustPrice.toFixed(2) + ")" + " * " + quantity + " = ₹" + crustSubtotal.toFixed(2) + "<br>" +
    "Sauce: " + sauce + " (₹" + saucePrice.toFixed(2) + ")" + " * " + quantity + " = ₹" + sauceSubtotal.toFixed(2) + "<br>" +
    "Cheese: " + cheese + " (₹" + cheesePrice.toFixed(2) + ")" + " * " + quantity + " = ₹" + cheeseSubtotal.toFixed(2) + "<br>" +
    "Toppings: " + toppings + " (₹" + toppingsPrice.toFixed(2) + ")" + " * " + quantity + " = ₹" + toppingsSubtotal.toFixed(2) + "<br>" +
    "Beverages: " + beverage + " (₹" + beveragePrice.toFixed(2) + ")" + " * " + quantity + " = ₹" + beverageSubtotal.toFixed(2) + "<br>" +
    "Extras: " + addmore + " (₹" + addmorePrice.toFixed(2) + ")" + " * " + quantity + " = ₹" + addmoreSubtotal.toFixed(2) + "<br><br>" +
    "Total Price: ₹" + TotalPrice.toFixed(2) + "<br>" +
    "Discount: ₹" + TotalPrice * 0.25 + "<br>" +
    "Discounted Price: ₹" + discountedPrice.toFixed(2);

  TotalPrice = (sizePrice * quantity) + (crustPrice * quantity) + (saucePrice * quantity) + (cheesePrice * quantity) + (toppingsPrice * quantity) + (beveragePrice * quantity) + (addmorePrice * quantity);
  document.getElementById("orderConfirmation").innerHTML = orderDetails;
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("orderConfirmation").style.display = "block";


  // Update the pizza total display with the new value
  document.getElementById("TotalPrice").textContent = "Total Price: ₹" + TotalPrice.toFixed(2);

  // After displaying the order confirmation, hide the order form
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("orderConfirmation").style.display = "block";
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("orderConfirmation").style.display = "block";


}



function resetOrderForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("quantity").value = 1;
  resetRadioButtons("size");
  resetRadioButtons("crust");
  resetRadioButtons("sauce");
  resetRadioButtons("cheese");
  resetCheckboxes("toppings");
  resetCheckboxes("beverage");
  resetCheckboxes("addmore");

}

function resetRadioButtons(groupName) {
  var radioButtons = document.getElementsByName(groupName);
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}

function resetCheckboxes(groupName) {
  var checkboxes = document.getElementsByName(groupName);
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
}


function getSelectedRadioText(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].nextSibling.textContent.trim();
    }
  }
  return '';
}

function getSelectedCheckboxes(name) {
  var checkboxes = document.getElementsByName(name);
  var selected = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push("(" + checkboxes[i].nextSibling.textContent.trim() + " ₹" + checkboxes[i].value + ")");
    }
  }
  return selected.join(" + ") + " =";
}


// function getSelectedCheckboxes(name) {
//   var checkboxes = document.getElementsByName(name);
//   var selected = [];
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       selected.push(checkboxes[i].nextSibling.textContent.trim());
//     }
//   }
//   return selected.join(", ");
// }

function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX / zoomer.offsetWidth * 100
  y = offsetY / zoomer.offsetHeight * 100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}