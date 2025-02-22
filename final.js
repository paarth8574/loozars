// Disable Confirm Order button until form is complete
const confirmButton = document.querySelector('.confirm-button');
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const shippingAddress = document.getElementById('shipping-address');
const shippingZipcode = document.getElementById('shipping-zipcode');

// Function to check if all required fields are filled
function checkFormCompletion() {
  if (
    shippingAddress.value && 
    shippingZipcode.value && 
    Array.from(paymentMethods).some(method => method.checked)
  ) {
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}

// Event listeners to check form completion
shippingAddress.addEventListener('input', checkFormCompletion);
shippingZipcode.addEventListener('input', checkFormCompletion);
paymentMethods.forEach(method => method.addEventListener('change', checkFormCompletion));

// Validate the form before submission
confirmButton.addEventListener('click', function(e) {
  if (!shippingAddress.value || !shippingZipcode.value) {
    alert('Please fill out all fields.');
    e.preventDefault();  // Prevent form submission if validation fails
  } else {
    alert('Order confirmed!');
    // You can submit the form or redirect to a success page here
  }
});
