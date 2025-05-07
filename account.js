const email = document.getElementById("email");
const name = document.getElementById("name");

const params = new URLSearchParams(new URL(window.location.href).search);
email.textContent = params.get("email");
name.textContent = params.get("name");
