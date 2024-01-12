const categoriesList = document.getElementById(`categories`);
const categoriesItems = document.querySelector(`.item`);

console.log(`Total categories: ${categoriesItems.length }`);

categoriesItems.forEach(category => {
    const categoryName = category.querySelector(`h2`).textContent;
    const categoryItemsTotal = category.querySelectorAll(`li`).length;

    console.log(`Category: ${categoryName}`);
    console.log(`Number of items: ${categoryItemsTotal}`);

});