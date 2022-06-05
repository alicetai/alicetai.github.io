// Formatted price in USD
const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function loadTotalPrice() {

    var prices = document.getElementsByClassName('items-price');
    for (const price of prices) {
        price.innerHTML = dollarUS.format(totalPrice(699, totalCartQuantity))
    }
}

function itemSum(numbers) {
    var total = 0;
    for (let i=0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Calculate the total price of a set of items
function totalPrice(cost, quantity) {
    return cost * quantity;
}

function applyCode() {

    // validateCode()
    // Calculate discounted price

    // Display confirmation
    let confirmation = document.getElementById('discount-confirmation');
    confirmation.style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(() => {
        confirmation.style.display = 'none';
    }, 3000);
}
