// document.querySelector('body').style.backgroundColor = '#eaf1fad0';
const fontControl = document.getElementById('font-size-control');
const textSize = document.getElementById('text');


const fontSizeControl = ({ currentTarget }) =>
(textSize.style.fontSize = `${currentTarget.value}px`);

fontControl.addEventListener('input', fontSizeControl);