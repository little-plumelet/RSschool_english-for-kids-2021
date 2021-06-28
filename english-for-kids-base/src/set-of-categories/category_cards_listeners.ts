import setOfCategories from './set_of_categories';

export default function listenersForSetOfCategories(): void {
  setOfCategories.forEach((element) => {
    element.categoryContainer.addEventListener('click', (event) => {
      console.log(event.currentTarget);
      console.log(element);
    });
  });
} // Пока не нужен, позже убрать!!!!!!
