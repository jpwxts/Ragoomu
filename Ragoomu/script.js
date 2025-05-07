document.addEventListener("DOMContentLoaded", () => {
    const pages = [
        { name: "home page", url: "index.html" },
        { name: "about us", url: "about.html" },
        { name: "products", url: "products.html" },
        { name: "branches", url: "branches.html" },
        { name: "contact us", url: "contact.html" },
    ];

    window.handleSearch = (event) => {
        event.preventDefault();
        const query = document.getElementById("search-box").value.toLowerCase();

        const page = pages.find(p => p.name === query);
        if (page) {
            window.location.href = page.url;
        } else {
            alert("Page not found. Please try searching for 'Home Page', 'About Us', 'Products', 'Branches', or 'Contact Us'.");
        }

        
    };
});

let openOrder = document.querySelector('.order');
let closeOrder = document.querySelector('.closeOrder');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openOrder.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeOrder.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'ANGUS CHEESE BURGER',
        image: 'Angus_Cheese.jpg',
        price: 169
    },
    {
        id: 2,
        name: 'CLASSIC CHICKEN BURGER',
        image: 'Classic_Chicken.jpg',
        price: 139
    },
    {
        id: 3,
        name: 'QUESSO BBQ',
        image: 'Quesso_BBQ.jpg',
        price: 245
    },
    {
        id: 4,
        name: 'SNOW CHEESE',
        image: 'Snow_Cheese.jpg',
        price: 245
    },

];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Order</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list cart
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}