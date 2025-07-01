document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting

  // clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  // get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // validate
  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();
  }
});