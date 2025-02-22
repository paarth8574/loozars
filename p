<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="cart.css">
</head>
<body>
    <header>
        <nav id="navbar">
            <div class="logo"><a href="index.html">LOOZARS</a></div>
            <ul id="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="cart.html" id="cart-link">Cart (<span id="cart-count">0</span>)</a></li>
            </ul>
            <button id="mobile-toggle" class="mobile-toggle">&#9776;</button>
        </nav>
    </header>

    <!-- Cart Details Section -->
    <section class="cart-details">
        <h1>Your Cart</h1>
        <div id="cart-items">
            <!-- Cart items will be dynamically loaded here -->
        </div>

        <div class="cart-summary">
            <p><strong>Total Items:</strong> <span id="total-items">0</span></p>
            <p><strong>Total Price:</strong> $<span id="total-price">0.00</span></p>

            <h2>Payment Method</h2>
            <form id="payment-form">
                <label for="payment-method">Choose Payment Method:</label>
                <select id="payment-method" name="payment-method">
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                </select>
                <button type="submit" class="cta-button">Proceed to Checkout</button>
            </form>
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
        <p>&copy; 2024 Loozars Clothing. All rights reserved.</p>
    </footer>

    <script src="cart.js"></script>
</body>
</html>
