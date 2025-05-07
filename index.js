const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const value = document.getElementById("value");

plusButton.onclick = () => {
  const currentValue = value.textContent;
  value.textContent = parseInt(currentValue) + 1;
};

minusButton.onclick = () => {
  const currentValue = value.textContent;
  value.textContent = parseInt(currentValue) - 1;
};
