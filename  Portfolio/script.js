document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((element) => {
    element.style.animationDelay = `${Math.random() * 2}s`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      event.preventDefault();
      alert("Please fill out all required fields.");
    }
  });
});
