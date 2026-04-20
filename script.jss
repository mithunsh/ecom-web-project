const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
];

let cart = [];

// Display products
function displayProducts() {
    const productDiv = document.getElementById("products");

    products.forEach(product => {
        productDiv.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add</button>
            </div>
        `;
    });
}

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Update cart UI
function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartList.innerHTML += `
            <li>
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${index})">X</button>
            </li>
        `;
    });

    document.getElementById("total").innerText = total;
}

// Remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout
function checkout() {
    alert("Order placed successfully!");
    cart = [];
    updateCart();
}

// Initialize
displayProducts();