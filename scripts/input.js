// Event listeners for billing address input

var useShippingAddress = document.getElementById("use-shipping-address").parentElement;
useShippingAddress.addEventListener("click", function() {
    document.getElementById("billing-address").style.display = "none";
});

var useBillingAddress = document.getElementById("use-billing-address").parentElement;
useBillingAddress.addEventListener("click", function() {
    document.getElementById("billing-address").style.display = "block";
});


// Event listeners for express shipping option

var standardShipping = document.getElementById("standard-shipping").parentElement;
standardShipping.addEventListener("click", function() {
    removeShippingPrice();
});

var expressShipping = document.getElementById("express-shipping").parentElement;
expressShipping.addEventListener("click", function() {
    
    addShippingPrice();
});


// Change the appearance of written input Values when focused

let inputElements = document.getElementsByClassName("text-input bottom-border-light");

for (var element of inputElements) {

    let inputValue = element.getElementsByTagName("input")[0];

    if (inputValue) {
        inputValue.addEventListener("focusin", function() {
            // Remove light border and replace with tan
            inputValue.parentElement.classList.replace("bottom-border-light", "bottom-border-tan");
        });
        inputValue.addEventListener("focusout", function() {
            // Remove tan border and replace with light
            inputValue.parentElement.classList.replace("bottom-border-tan", "bottom-border-light");
        });
    }
};


// Ensure that when the whole checkbox area is clicked, the input registers

let checkboxElement = document.getElementsByClassName("checkbox-option");

for (var element of checkboxElement) {

    // If the checkbox div is clicked, toggle the checked value
    element.addEventListener("click", function() {
        // Ensure other options are cleared
        selectOne(this, this.parentElement.getElementsByClassName("checkbox-option"));
    });
};


// Ensure single select for a list of checkbox options
function selectOne(selected, list) {
    let checkBoxValue = selected.getElementsByTagName("input")[0];

    // Unselect everything except for the selected element
    for (let i=0; i < list.length; i++) {
        list[i].getElementsByTagName("input")[0].checked = false;
    }
    checkBoxValue.checked = true;
    // No ability to uncheck - everything in the form is required
}