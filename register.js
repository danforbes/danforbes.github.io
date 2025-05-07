const email = document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

function valid() {
  return email.validity.valid && name.validity.valid &&
    password.value === confirmPassword.value &&
    password.validity.valid && confirmPassword.validity.valid;
}

email.oninput = () => {
  submit.disabled = !valid();
};

name.oninput = () => {
  submit.disabled = !valid();
};

password.oninput = () => {
  submit.disabled = !valid();
};

confirmPassword.oninput = () => {
  submit.disabled = !valid();
};

form.onsubmit = (e) => {
  e.preventDefault();

  if (!valid()) {
    return;
  }

  window.location.replace(
    `/account.html?email=${email.value}&name=${name.value}`,
  );
};
