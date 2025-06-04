// login settings
function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}
// end of login settings


document.addEventListener("DOMContentLoaded", () => {
    const pages = [
        { name: "home page", url: "home.php" },
        { name: "about us", url: "about.php" },
        { name: "products", url: "products.php" },
        { name: "branches", url: "branches.php" },
        { name: "contact us", url: "contact.php" },
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

// Load cart from localStorage or initialize as empty array
let listCarts = JSON.parse(localStorage.getItem('ragoomuCart')) || [];

// Example products array (make sure this matches your actual products)
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
    {
        id: 5,
        name: 'G-Soy GOOMU POPS',
        image: 'G-Soy Goomu Pops Family-306php.jpg',
        price: 306
    },
    {
        id: 6,
        name: 'Classic Chicken POPS',
        image: 'Classic Chicken Pops-306php.jpg',
        price: 306
    },
    {
        id: 7,
        name: 'K-HANG GOOMU POPS',
        image: 'K-Hang Goomu Pops Family-306php.jpg',
        price: 306
    },
    {
        id: 8,
        name: 'FRIES',
        image: 'Fries-124php.jpg',
        price: 124
    },
    {
        id: 9,
        name: 'DIRTY FRIES',
        image: 'Dirty Fries-150php.jpg',
        price: 150
    },
];

// Before rendering products
let productVisibility = JSON.parse(localStorage.getItem('productVisibility')) || products.map(() => true);

function initApp(){
    products.forEach((value, key) =>{
        if (!productVisibility[key]) return; // Skip hidden products
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="assets/IMG/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Order</button>`;
        list.appendChild(newDiv);
    })
}
// Initialize products only after DOM is ready
// initApp();

function addToCart(key){
    if(listCarts[key] == null){
        // copy product from list to list cart
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    saveCart();
    reloadCart();
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    saveCart();
    reloadCart();
}

function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        if(value != null){
            totalPrice += value.price;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="assets/IMG/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCart.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('ragoomuCart', JSON.stringify(listCarts));
}

// Modal and Cart UI logic
document.addEventListener('DOMContentLoaded', function() {
    // --- Cart Modal Logic ---
    const modal = document.getElementById('orderModal');
    const checkoutBtn = document.querySelector('.checkoutOrder');
    const closeModal = document.querySelector('.close-modal');
    const closeModalBtn = document.querySelector('.closeModalBtn');

    if (checkoutBtn && modal) {
        checkoutBtn.addEventListener('click', function() {
            modal.style.display = 'block';
            // Clear the cart data and UI
            listCarts = [];
            saveCart();
            reloadCart();
        });
    }

    function hideModal() {
        if (modal) modal.style.display = 'none';
    }

    if (closeModal) closeModal.addEventListener('click', hideModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            hideModal();
        }
    });

    // --- Contact Modal Logic ---
    const openBtn = document.getElementById('openContactModalForm');
    const contactModal = document.getElementById('contactModalForm');
    const closeBtn = document.getElementById('closeContactModalForm');
    const form = document.getElementById('contact-form-modal-form');

    if(openBtn && contactModal) {
        openBtn.onclick = () => { contactModal.style.display = 'block'; };
    }
    if(closeBtn && contactModal) {
        closeBtn.onclick = () => { contactModal.style.display = 'none'; };
    }
    window.addEventListener('click', function(event) {
        if(event.target === contactModal) contactModal.style.display = 'none';
    });

    if(form && contactModal) {
        form.onsubmit = function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            contactModal.style.display = 'none';
            form.reset();
        };
    }

    // --- Auth Modal Logic ---
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const loginForm = document.getElementById('loginForm');
    const registerBtn = document.getElementById('registerBtn');

    if (authBtn && authModal) {
        authBtn.onclick = () => { authModal.style.display = 'block'; };
    }
    if (closeAuthModal && authModal) {
        closeAuthModal.onclick = () => { authModal.style.display = 'none'; };
    }
    window.addEventListener('click', function(event) {
        if (event.target === authModal) authModal.style.display = 'none';
    });

    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Logged in! (Demo only)');
            authModal.style.display = 'none';
            loginForm.reset();
        };
    }
    if (registerBtn) {
        registerBtn.onclick = function() {
            alert('Registration form coming soon!');
        };
    }

    // --- Cart Quantity Update ---
    updateCartQuantity();

    // Initialize products after DOM is ready
    initApp();
});

// Example: update quantity in the cart icon safely
function updateCartQuantity() {
    const quantity = document.querySelector('.quantity');
    if (quantity) {
        // Calculate total quantity from listCarts (or from localStorage if needed)
        let listCarts = JSON.parse(localStorage.getItem('ragoomuCart')) || [];
        let count = 0;
        listCarts.forEach(item => {
            if (item && item.quantity) count += item.quantity;
        });
        quantity.textContent = count;
    }
}

// Call this on DOMContentLoaded and after cart changes
document.addEventListener('DOMContentLoaded', function() {
    updateCartQuantity();
    // ...existing modal/cart/auth logic...
});