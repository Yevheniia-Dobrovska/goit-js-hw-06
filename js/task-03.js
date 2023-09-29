const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const glr = document.querySelector('.gallery');
const newImgs = images.map(img => `<li><img src="${img.url}" alt="${img.alt}" width="300" height="200"/></li>`)
  .join("");
console.log(newImgs);
glr.insertAdjacentHTML("beforeend", newImgs);
console.log(glr);
glr.style.display = "flex";
glr.style.gap = "10px";