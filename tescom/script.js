// <script>
  // Get the reference to the button element
  const myButton = document.getElementById("btn-cart");

  // Add a click event listener to the button
  myButton.addEventListener("click", () => {
    // Show an alert when the button is clicked
    alert("Cart design in progress. Thanks for visiting! Your suggestions are welcome and highly appreciated. Happy shopping! 🛒✨");
  });


// JavaScript code for responsive navbar

// Get references to the elements in the DOM
let nav = document.getElementById("navbar-center"); // The navbar element
let navbarToggle = document.getElementById("navbar-toggle"); // The hamburger icon or toggle button
let iconBars = document.getElementById("iconBars"); // The "hamburger" icon when navbar is collapsed
let iconX = document.getElementById("iconX"); // The "X" icon when navbar is expanded

// Add click event listener to the navbar toggle button
navbarToggle.addEventListener("click", function() {
  // Check if the navbar is hidden or not
  if (nav.style.display === "none" || nav.style.display === "") {
    // If the navbar is hidden, show it
    nav.style.display = "block"; // Display the navbar
    iconBars.style.display = "none"; // Hide the "hamburger" icon
    iconX.style.display = "inline"; // Show the "X" icon
  } else {
    // If the navbar is shown, hide it
    nav.style.display = "none"; // Hide the navbar
    iconBars.style.display = "inline"; // Show the "hamburger" icon
    iconX.style.display = "none"; // Hide the "X" icon
  }
});

// Add click event listener to the "X" icon
iconX.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent event from bubbling up to navbarToggle
  nav.style.display = "none"; // Hide the navbar
  iconBars.style.display = "inline"; // Show the "hamburger" icon
  iconX.style.display = "none"; // Hide the "X" icon
});
