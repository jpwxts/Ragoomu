// Example products array (should match your script.js)
const products = [
    { id: 1, name: 'ANGUS CHEESE BURGER', image: 'Angus_Cheese.jpg', price: 169 },
    { id: 2, name: 'CLASSIC CHICKEN BURGER', image: 'Classic_Chicken.jpg', price: 139 },
    { id: 3, name: 'QUESSO BBQ', image: 'Quesso_BBQ.jpg', price: 245 },
    { id: 4, name: 'SNOW CHEESE', image: 'Snow_Cheese.jpg', price: 245 }
];

// Load visibility from localStorage or default to true
let productVisibility = JSON.parse(localStorage.getItem('productVisibility')) || products.map(() => true);

function saveVisibility() {
    localStorage.setItem('productVisibility', JSON.stringify(productVisibility));
}

function renderAdminProductList() {
    const listDiv = document.querySelector('.admin-product-list');
    listDiv.innerHTML = '';
    products.forEach((product, idx) => {
        const prodDiv = document.createElement('div');
        prodDiv.className = 'admin-product-item';
        prodDiv.innerHTML = `
            <img src="assets/IMG/${product.image}" alt="${product.name}" style="width:60px;height:60px;vertical-align:middle;">
            <span style="margin-left:1rem;">${product.name}</span>
            <label style="margin-left:2rem;">
                <input type="checkbox" ${productVisibility[idx] ? 'checked' : ''} data-idx="${idx}">
                Visible
            </label>
        `;
        listDiv.appendChild(prodDiv);
    });

    // Add event listeners
    listDiv.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const idx = parseInt(this.getAttribute('data-idx'));
            productVisibility[idx] = this.checked;
            saveVisibility();
        });
    });
}

document.addEventListener('DOMContentLoaded', renderAdminProductList);