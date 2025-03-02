form = document.querySelector("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.getElementById("error-icon");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the default form submission
    if (email.value.trim()==="") {
        email.classList.remove("error");
        errorIcon.classList.add("hidden");
        errorMessage.classList.add("hidden");
    }
    else if (!emailRegex.test(email.value)) {
        errorIcon.classList.remove("hidden");
        errorMessage.classList.remove("hidden"); // Show error message
        email.classList.add("error"); // Make the border red

    }
})

email.addEventListener("input", function(event) {
    if (email.value.trim()==="") {
        email.classList.remove("error");
        errorIcon.classList.add("hidden");
        errorMessage.classList.add("hidden");
    }
    else if (!emailRegex.test(email.value)) {
        errorIcon.classList.remove("hidden");
        errorMessage.classList.remove("hidden"); // Show error message
        email.classList.add("error");
    } else {
        errorIcon.classList.add("hidden");
        errorMessage.classList.add("hidden"); // Show error message
        email.classList.remove("error");
    }
})