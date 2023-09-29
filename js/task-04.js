const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const txt = document.querySelector("#value");
let counterValue = 0;
buttonIncrement.addEventListener("click", onIncrement);
function onIncrement() {
    txt.textContent = counterValue += 1;
}
buttonDecrement.addEventListener("click", onDecrement);
function onDecrement() {
    txt.textContent = counterValue -= 1;
}
