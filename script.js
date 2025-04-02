const hamburger= document.getElementById("hamburger");
const menu= document.getElementById("menu");


hamburger.addEventListener("click", function(){
    menu.classList.toggle("show");
    this.classList.toggle("open");
    console.log("clicked");
})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        // Get values from textboxes
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Clear any previous error messages
        document.getElementById("name-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("message-error").textContent = "";

        // Function to validate email
        function isValidEmail(email) {
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        // Initialize a flag to check if there are any errors
        let hasError = false;

        // Check if fields are empty and display error messages
        if (name === "") {
            document.getElementById("name-error").textContent = "Please enter your name.";
            hasError = true;
        }

        if (email === "") {
            document.getElementById("email-error").textContent = "Please enter your email.";
            hasError = true;
        } else if (!isValidEmail(email)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            hasError = true;
        }

        if (message === "") {
            document.getElementById("message-error").textContent = "Please enter a message.";
            hasError = true;
        }

        // If there's any error, stop form submission
        if (hasError) {
            return;
        }

        // Clear the textboxes instantly
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Show success message
        let successMessage = document.createElement("div");
        successMessage.textContent = "Message sent successfully!";
        successMessage.style.color = "White";
        successMessage.style.fontWeight = "bold";
        successMessage.style.textAlign = "center";
        successMessage.style.marginTop = "10px";
        successMessage.style.fontSize = "4vw";
        document.body.appendChild(successMessage);

        // After 5 seconds, remove the success message
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 5000);
    });
});
