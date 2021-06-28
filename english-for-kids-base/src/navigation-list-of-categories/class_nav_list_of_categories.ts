import IcategoryCardData from '../category-card/interface_category_card_data';
import createDomElement from '../shared/shared_functions/create-dom-element';

const defaultNavListParams = {
  ul: {
    tegName: 'ul',
    classNames: ['nav-list-container'],
    attributes: [[]],
  },
  categoriesLi: {
    tegName: 'li',
    classNames: ['nav-item', 'categories'],
    attributes: [[]],
  },
};

export default class NavListOfCategories {
  ul: HTMLElement;

  constructor(categories: IcategoryCardData[]) {
    this.ul = createDomElement(defaultNavListParams.ul);
    const categoriesLi = createDomElement(defaultNavListParams.categoriesLi);
    categoriesLi.innerHTML = 'All categories';
    categoriesLi.classList.add('activated');

    this.ul.appendChild(categoriesLi);
    categories.forEach((element) => {
      const li = document.createElement('li');
      li.classList.add(element.categoryName);
      li.classList.add('nav-item');
      li.innerHTML = element.title;
      this.ul.appendChild(li);
    });
  }
}
