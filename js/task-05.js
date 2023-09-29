const nameInpt = document.querySelector("#name-input");
const nameOutpt = document.querySelector("#name-output");
nameInpt.addEventListener("input", onInput);
function onInput(event) {
    console.log(event.target.value);
    nameOutpt.textContent = event.target.value.trim() === "" ? "Anonymous" : event.target.value;
}

