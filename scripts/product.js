var product = {
    name: "C.F. Martin OM-28E Modern Deluxe Acoustic Guitar with Pickup",
    price: 699.00,
    quantityInStock: 10,
    quantityInCart: 0,
    tags: ["Guitars"],
    image: "images/products/guitars/OM28E/OM28E-Modern-Deluxe-Main.jpg",
    description: "The OM-28 Modern Deluxe is a new take on Martin Vintage. This guitar is packed with custom features and modern technology that you have to see, feel, and hear for yourself.",
    specifications: "Top Material: Sitka Spruce with VTS"
}

// Format price in USD
let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

window.onload = function() {
    loadNames();
    loadPrice();
    loadDescription();
    loadImages();
    loadSpecs();
};

function loadNames() {
    var productNames = document.getElementsByClassName('product-name');
    for (const name of productNames) {
        name.innerHTML = product.name;
    }
}

function loadPrice(){
    var productPrice = document.getElementsByClassName('product-price');
    for (const price of productPrice) {
        price.innerHTML = dollarUS.format(product.price);
    }
}

function loadImages() {
    document.getElementById('main-product-img').src = product.image;
    var listingImage = document.getElementsByClassName('listing-img');
    for (const image of listingImage) {
        image.src = product.image;
    }
}

function loadDescription() {
    var productDescription = document.getElementById('product-description');
    productDescription.innerHTML = product.description;
}

function loadSpecs() {
    var productSpecs = document.getElementById('product-specs');
    productSpecs.innerHTML = product.specifications;
}

// updateQuantity() {
//     //
// }