const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elementsIngr = ingredients.map(ingr => {
const li = document.createElement('li');
li.classList.add("item");
  li.textContent = ingr;
  return li;
}) 
console.log(elementsIngr);
const ul = document.querySelector("#ingredients")
ul.append(...elementsIngr);
console.log(ul);

