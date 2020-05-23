const contactForm = document.querySelector("#contact");

contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
   event.preventDefault();
   console.log("The form was submitted");

   const name = document.querySelector("#name");
   const nameError = document.querySelector("#nameError");
   const nameValue = name.value;

   if (checkInputLength(nameValue) === true) {
      nameError.style.display = "none";
   } else {
      nameError.style.display = "block";
   }

   const email = document.querySelector("#email");
   const invalidEmailError = document.querySelector("#emailError");
   const emailValue = email.value;

   if (validateEmail(emailValue) === true) {
      invalidEmailError.style.display = "none";
   } else {
      invalidEmailError.style.display = "block";
   }
}
function checkInputLength(value) {
   const trimmedValue = value.trim();
   if (trimmedValue.length > 0) {
      return true;
   } else {
      return false;
   }
}
