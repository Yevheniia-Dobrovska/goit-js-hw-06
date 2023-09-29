const countCategories = document.querySelectorAll(".item");
console.log("Number of categories:", countCategories.length);
// console.log(countCategories);
countCategories.forEach((a) => {
    console.log("Category:", a.firstElementChild.textContent);
    console.log("Elements:", a.lastElementChild.children.length);
}
);




