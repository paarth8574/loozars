// Update Cart Display and Calculate Total
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalAmount = document.getElementById('total-amount');
    
    // Clear existing items
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <img src="product.jpg" alt="${item.product}">
            <div class="cart-item-details">
                <h3>${item.product} (Size: ${item.size})</h3>
                <p>Price: $500</p>
                <p>Quantity: <input type="number" value="${item.quantity}" min="1" max="10" class="item-quantity" data-index="${itemCount}"></p>
            </div>
            <button class="remove-item" data-index="${itemCount}">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);

        totalPrice += 500 * item.quantity;
        itemCount++;
    });

    totalItems.textContent = itemCount;
    totalAmount.textContent = totalPrice.toFixed(2);
    
    // Update Cart Badge
    document.getElementById('cart-count').textContent = itemCount;

    // Attach event listeners for quantity update and remove item
    attachEventListeners();
}

// Attach event listeners for quantity change and remove item
function attachEventListeners() {
    const quantityInputs = document.querySelectorAll('.item-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateCartQuantity);
    });

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeCartItem);
    });
}

// Update Cart Quantity
function updateCartQuantity(event) {
    const index = event.target.getAttribute('data-index');
    const newQuantity = parseInt(event.target.value);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Remove Cart Item
function removeCartItem(event) {
    const index = event.target.getAttribute('data-index');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Checkout Button Functionality
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to Checkout');
    // You can integrate payment functionality here
});

// Initialize Cart Page on Load
updateCart();
