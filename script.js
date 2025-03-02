form = document.querySelector("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.getElementById("error-icon");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the default form submission

    if (!emailRegex.test(email.value)) {
        errorIcon.classList.remove("hidden");
        errorMessage.classList.remove("hidden"); // Show error message
    }
})

email.addEventListener("input", function(event) {
    if (!emailRegex.test(email.value)) {
        errorIcon.classList.remove("hidden");
        errorMessage.classList.remove("hidden"); // Show error message
    } else {
        errorIcon.classList.add("hidden");
        errorMessage.classList.add("hidden"); // Show error message
    }
})