import CategoryCard from '../category-card/class_category_card';
import setOfCategories from './set_of_categories';

const allCategoriesArr: CategoryCard[] = [];
const containerOfAllCategories = document.createElement('div');
containerOfAllCategories.classList.add('all-categories-container');

setOfCategories.forEach((element) => {
  const { categoryContainer } = element;
  containerOfAllCategories.appendChild(categoryContainer);
  allCategoriesArr.push(element);
});

containerOfAllCategories.addEventListener('click', () => {
  allCategoriesArr.forEach((element) => {
    element.categoryCard.classList.add('hidden');
  });
});

export default containerOfAllCategories;
