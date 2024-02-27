document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
        } else {
            alert('Form submitted successfully!');
            // Here you can add code to send the form data to a server
            // For demonstration purposes, we'll just reset the form
            form.reset();
        }
    });

    function isValidEmail(email) {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
