import createDomElement from '../shared/shared_functions/create-dom-element';
import IcategoryCardData from '../category-card/interface_category_card_data';
import NavMenu from '../navigation-menu/class_nav_menu';
import CheckboxButton from '../shared/shared_classes/class_checkbox_button';
import sliderButton from '../shared/create_slider_button';
import Button from '../shared/shared_classes/class_button';
import statisticsPage from '../statistics/create_statistics_page';
import containerOfAllCategories from '../set-of-categories/create_container_of_all_categories';
import setOfNavItems from '../navigation-menu/set_of_navigation_items';

const defaultHeaderParams = {
  header: {
    tegName: 'header',
    classNames: ['header'],
    attributes: [[]],
  },
  wrapper: {
    tegName: 'div',
    classNames: ['wrapper'],
    attributes: [[]],
  },
  burgerMenu: {
    tegName: 'div',
    classNames: ['burger-menu'],
    attributes: [[]],
  },
  titleContainer: {
    tegName: 'div',
    classNames: ['title-container'],
    attributes: [[]],
  },
  title: {
    tegName: 'h1',
    classNames: ['title'],
    attributes: [[]],
    result: 'english for kids',
  },
};
export default class Header {
  header: HTMLElement;

  headerWrapper: HTMLElement;

  burgerMenu: NavMenu;

  titleContainer: HTMLElement;

  title: HTMLElement;

  statisticsButton: HTMLElement;

  statisticPageContainer: HTMLElement;

  allCategoriesContainer: HTMLElement;

  sliderButton: CheckboxButton;

  constructor(categories: IcategoryCardData[]) {
    const button = new Button('./public/images/statistics.png');
    this.sliderButton = sliderButton;
    this.statisticsButton = button.button;
    this.statisticsButton.classList.add('statistics-button');
    this.burgerMenu = new NavMenu(categories);
    this.header = createDomElement(defaultHeaderParams.header);
    this.headerWrapper = createDomElement(defaultHeaderParams.wrapper);
    this.titleContainer = createDomElement(defaultHeaderParams.titleContainer);
    this.title = createDomElement(defaultHeaderParams.title);
    this.statisticPageContainer = statisticsPage.container;
    this.allCategoriesContainer = containerOfAllCategories;

    this.header.appendChild(this.headerWrapper);
    this.headerWrapper.appendChild(this.burgerMenu.container);
    this.headerWrapper.appendChild(this.titleContainer);
    this.titleContainer.appendChild(this.title);
    this.titleContainer.appendChild(this.statisticsButton);
    this.headerWrapper.appendChild(this.sliderButton.switchLabel);

    this.listenToStatisticsButton();
  }

  listenToStatisticsButton(): void {
    this.statisticsButton.addEventListener('click', () => {
      if (this.statisticPageContainer.classList.contains('hidden')) {
        this.statisticPageContainer.classList.remove('hidden');
        this.allCategoriesContainer.classList.add('hidden');
        this.burgerMenu.liOfAllCategories.classList.remove('activated');
        setOfNavItems.forEach((element) => element.classList.remove('activated'));
      } else {
        this.statisticPageContainer.classList.add('hidden');
        this.allCategoriesContainer.classList.remove('hidden');
      }
    });
  }
}
