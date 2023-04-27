// Get input fields
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const professionInput = document.getElementById("profession");
const businessTypeInput = document.getElementById("business-type");
const experienceInput = document.getElementById("years-experience");

// Get button element
const submitButton = document.getElementById("submit");

// Get error message element
const errorMessage = document.getElementById("error-message");

// Add event listener to submit button
submitButton.addEventListener("click", () => {
  // Validate input fields
  if (!nameInput.value || !ageInput.value || !professionInput.value || !businessTypeInput.value || !experienceInput.value) {
    // Show error message
    errorMessage.textContent = "Please fill out all fields.";
  } else {
    // Submit form
    // TODO: Implement form submission code here
  }
});
