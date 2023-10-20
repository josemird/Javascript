const input = document.querySelector("input");
const log = document.getElementsByClassName(".search");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
}