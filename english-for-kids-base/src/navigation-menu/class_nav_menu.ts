import IcategoryCardData from '../category-card/interface_category_card_data';
import createDomElement from '../shared/shared_functions/create-dom-element';
import setOfCategories from '../set-of-categories/set_of_categories';
import BurgerMenuButton from '../shared/shared_classes/class_burger_menu_button';
import NAV_CONSTANTS from '../shared/constants/nav_constants';
import setOfNavItems from './set_of_navigation_items';

const { listOfMenuOffset } = NAV_CONSTANTS;

const liOfAllcategories = {
  tegName: 'li',
  className: 'activated',
  idAttribute: 'allCategories',
  result: 'All categories',
};

const defaultNavListParams = {
  container: {
    tegName: 'div',
    classNames: ['nav-container'],
    attributes: [[]],
  },
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
  cover: {
    tegName: 'div',
    classNames: ['cover', 'hidden'],
    attributes: [[]],
  },
};

export default class NavMenu {
  container: HTMLElement;

  ul: HTMLElement;

  liOfAllCategories: HTMLElement;

  burgerMenuButtonEl: HTMLElement;

  burgerMenuButton: BurgerMenuButton;

  cover: HTMLElement;

  constructor(categories: IcategoryCardData[]) {
    this.container = createDomElement(defaultNavListParams.container);
    this.cover = createDomElement(defaultNavListParams.cover);
    this.ul = createDomElement(defaultNavListParams.ul);
    this.burgerMenuButton = new BurgerMenuButton();
    this.burgerMenuButtonEl = this.burgerMenuButton.container;
    this.liOfAllCategories = createDomElement(defaultNavListParams.categoriesLi);
    this.liOfAllCategories.innerHTML = liOfAllcategories.result;
    this.liOfAllCategories.classList.add(liOfAllcategories.className);
    this.liOfAllCategories.setAttribute('id', liOfAllcategories.idAttribute);

    setOfNavItems.push(this.liOfAllCategories);
    this.ul.appendChild(this.liOfAllCategories);

    this.createLi(categories);

    this.container.appendChild(this.burgerMenuButtonEl);
    this.container.appendChild(this.ul);
    this.container.appendChild(this.cover);

    this.listenToNav();
    this.revealListOfMenu();
    this.listenToCover();
  }

  createLi(categories: IcategoryCardData[]): void {
    categories.forEach((element) => {
      const li = document.createElement('li');
      li.setAttribute('id', element.categoryName);
      li.classList.add(element.categoryName);
      li.classList.add('nav-item');
      li.innerHTML = element.title;
      this.ul.appendChild(li);
      setOfNavItems.push(li);
    });
  }

  showHideMenuList(): void {
    if (this.burgerMenuButton.input.classList.contains('checked')) {
      this.burgerMenuButton.input.classList.remove('checked');
      this.ul.setAttribute('style', `left: ${listOfMenuOffset}px`);
      this.cover.classList.add('hidden');
    } else {
      this.burgerMenuButton.input.classList.add('checked');
      this.ul.setAttribute('style', 'left: 0px');
      this.cover.classList.remove('hidden');
    }
  }

  listenToNav(): void {
    this.ul.addEventListener('click', (e) => {
      const id = (e.target as HTMLElement).getAttribute('id');
      setOfNavItems.forEach((element) => {
        element.classList.remove('activated');
        if (id === liOfAllcategories.idAttribute) {
          (e.target as HTMLElement).classList.add('activated');
          setOfCategories.forEach((elem) => {
            elem.categoryCard.classList.remove('hidden');
            elem.hideCardsOfCategory();
          });
          this.burgerMenuButton.input.classList.add('checked');
          this.showHideMenuList();
        } else if (id) {
          (e.target as HTMLElement).classList.add('activated');
          setOfCategories.forEach((elem) => {
            elem.categoryCard.classList.add('hidden');
            elem.hideCardsOfCategory();
            if (elem.categoryId === id) elem.revealCardsOfCategory();
          });
          this.burgerMenuButton.input.classList.add('checked');
          this.showHideMenuList();
        } else this.liOfAllCategories.classList.add('activated');
      });
    });
  }

  revealListOfMenu(): void {
    this.burgerMenuButton.label.addEventListener('click', () => {
      this.showHideMenuList();
    });
  }

  listenToCover(): void {
    this.cover.addEventListener('click', () => {
      this.showHideMenuList();
    });
  }
}
