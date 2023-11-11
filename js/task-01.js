const categoriesList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItemLength = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemLength}`);
});
