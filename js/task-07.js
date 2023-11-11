const sizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

sizeControl.addEventListener("input", function () {
  text.style.fontSize = `${sizeControl.value}px`;
});
