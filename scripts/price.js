function displayPrice() {
    
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
