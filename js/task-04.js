const counterValue = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

const updateCounter = (newValue) => {
  currentValue = newValue;
  counterValue.textContent = currentValue;
};

incrementButton.addEventListener("click", () => {
  updateCounter(currentValue + 1);
});

decrementButton.addEventListener("click", () => {
  updateCounter(currentValue - 1);
});
