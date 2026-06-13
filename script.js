const products = [
{
    name: "MacBook Pro",
    category: "Laptop",
    price: 120000,
    image: "images/macbook.jpg"
},
{
    name: "Dell XPS",
    category: "Laptop",
    price: 95000,
    image: "images/dell-xps.jpg"
},
{
    name: "iPhone 15",
    category: "Phone",
    price: 80000,
    image: "images/iphone 15.jpg"
},
{
    name: "Samsung S24",
    category: "Phone",
    price: 75000,
    image: "images/samsung s24.jpg"
},
{
    name: "Mechanical Keyboard",
    category: "Accessory",
    price: 3500,
    image: "images/keyboard.jpg"
},
{
    name: "Gaming Mouse",
    category: "Accessory",
    price: 2500,
    image: "images/mouse.jpg"
}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function render(items) {
    document.getElementById("products").innerHTML = items.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <h4>₹${product.price.toLocaleString()}</h4>
                <button onclick="addCart('${product.name}')">
                    Add To Cart
                </button>
            </div>
        </div>
    `).join("");
}

function addCart(name) {
    cart.push(name);
    updateCart();
    alert(`${name} added to cart`);
}

function filterProducts(category) {
    if (category === "All") {
        render(products);
    } else {
        render(products.filter(product => product.category === category));
    }
}

document.getElementById("search").addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    render(filteredProducts);
});

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

updateCart();
render(products);