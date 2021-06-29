import IcategoryCardData from '../category-card/interface_category_card_data';
import createDomElement from '../shared/shared_functions/create-dom-element';
import setOfCategories from '../set-of-categories/set_of_categories';
import BurgerMenuButton from '../shared/shared_classes/class_burger_menu_button';
import NAV_CONSTANTS from '../shared/constants/nav_constants';

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
};

export default class NavMenu {
  container: HTMLElement;

  ul: HTMLElement;

  setOfLi: HTMLElement[];

  burgerMenuButtonEl: HTMLElement;

  burgerMenuButton: BurgerMenuButton;

  constructor(categories: IcategoryCardData[]) {
    this.container = createDomElement(defaultNavListParams.container);
    this.ul = createDomElement(defaultNavListParams.ul);
    this.setOfLi = [];
    this.burgerMenuButton = new BurgerMenuButton();
    this.burgerMenuButtonEl = this.burgerMenuButton.container;
    const categoriesLi = createDomElement(defaultNavListParams.categoriesLi);
    categoriesLi.innerHTML = liOfAllcategories.result;
    categoriesLi.classList.add(liOfAllcategories.className);
    categoriesLi.setAttribute('id', liOfAllcategories.idAttribute);

    this.setOfLi.push(categoriesLi);
    this.ul.appendChild(categoriesLi);

    this.createLi(categories);

    this.container.appendChild(this.burgerMenuButtonEl);
    this.container.appendChild(this.ul);

    this.listenToNav();
    this.revealListOfMenu();
  }

  createLi(categories: IcategoryCardData[]): void {
    categories.forEach((element) => {
      const li = document.createElement('li');
      li.setAttribute('id', element.categoryName);
      li.classList.add(element.categoryName);
      li.classList.add('nav-item');
      li.innerHTML = element.title;
      this.ul.appendChild(li);
      this.setOfLi.push(li);
    });
  }

  showHideMenuList(): void {
    if (this.burgerMenuButton.input.classList.contains('checked')) {
      this.burgerMenuButton.input.classList.remove('checked');
      this.ul.setAttribute('style', `left: ${listOfMenuOffset}px`);
    } else {
      this.burgerMenuButton.input.classList.add('checked');
      this.ul.setAttribute('style', 'left: 0px');
    }
  }
  // возможно это не нужная функция (для листенера на документ для скрытия меню по нажатию ВНЕ меню)

  closeMenu(e: Event): void {
    console.log('+++', e.target);
    if (!(e.target as HTMLElement).closest('ul') && !(e.target as HTMLElement).closest('.burger-menu-container')) {
      if (this.burgerMenuButton.input.classList.contains('checked')) {
        this.showHideMenuList();
      }
    }
  }

  listenToNav(): void {
    this.ul.addEventListener('click', (e) => {
      const id = (e.target as HTMLElement).getAttribute('id');
      this.setOfLi.forEach((element) => {
        element.classList.remove('activated');
        if (id === liOfAllcategories.idAttribute) {
          setOfCategories.forEach((elem) => {
            elem.categoryCard.classList.remove('hidden');
            elem.hideCardsOfCategoryOnNavigation();
          });
        } else {
          setOfCategories.forEach((elem) => {
            elem.categoryCard.classList.add('hidden');
            elem.hideCardsOfCategoryOnNavigation();
            if (elem.categoryId === id) elem.revealCardsOfCategoryOnNavigation();
          });
        }
        (e.target as HTMLElement).classList.add('activated');
      });
      this.burgerMenuButton.input.classList.add('checked');
      this.showHideMenuList();
    });
  }

  revealListOfMenu(): void {
    this.burgerMenuButton.label.addEventListener('click', () => {
      this.showHideMenuList();
    });
    document.body.addEventListener('click', this.closeMenu.bind(this));
  }
}
