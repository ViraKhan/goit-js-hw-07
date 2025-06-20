// Отримуємо список усіх категорій
const categoriesList = document.querySelectorAll('#categories .item');
// Виводимо кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// Проходимося по кожному елементу категорії
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
