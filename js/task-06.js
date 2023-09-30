 const inpt = document.querySelector('#validation-input');
const inptLength = Number(inpt.dataset.length);
inpt.addEventListener('blur', inputInfo);
function inputInfo(event) {
    const val = event.currentTarget.value.length;
    if (inpt.value.length !== inptLength) {
        inpt.classList.remove('valid');
        inpt.classList.add('invalid');
    } else {
        inpt.classList.remove('invalid');
        inpt.classList.add('valid');
    }
}