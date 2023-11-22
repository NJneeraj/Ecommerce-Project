document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted!");
  // Add more log statements to see data, form action, etc.
  // ...
  this.submit(); // Manually trigger the form submission
});
