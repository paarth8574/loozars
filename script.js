// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');  // Add animation on toggle button
});

// Active Link Highlighting
const links = document.querySelectorAll('#nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Update Cart Badge
function updateCartBadge() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cart-count').textContent = cartCount;
}

// Add to Cart Button Functionality
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const selectedSize = document.getElementById('size') ? document.getElementById('size').value : null;
        const quantity = document.getElementById('quantity') ? document.getElementById('quantity').value : 1;

        if (selectedSize || !selectedSize) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ product: 'Classic Hoodie', size: selectedSize, quantity: quantity });
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('cartCount', cart.length);

            document.getElementById('cart-message').textContent = `You have added ${quantity} Classic Hoodie(s) to your cart.`;
            updateCartBadge();
        } else {
            alert('Please select a size and quantity.');
        }
    });
});

// Initialize cart badge on page load
updateCartBadge();
