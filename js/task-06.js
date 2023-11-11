const inputText = document.getElementById("validation-input");

inputText.addEventListener("blur", function () {
  const inputValue = this.value;
  const requiredValue = parseInt(this.getAttribute("data-length"));
  if (inputValue.length === requiredValue) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
});
