import setOfCategories from './set_of_categories';

export default function listenersForSetOfCategories(): void {
  setOfCategories.forEach((element) => {
    element.categoryContainer.addEventListener('click', () => {
    });
  });
} // Пока не нужен, позже убрать!!!!!!
