import createDomElement from '../shared/shared_functions/create-dom-element';
import IcategoryCardData from '../category-card/interface_category_card_data';
import NavMenu from '../navigation-menu/class_nav_menu';
import CheckboxButton from '../shared/shared_classes/class_checkbox_button';
import sliderButton from '../shared/create_slider_button';

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

  title: HTMLElement;

  sliderButton: CheckboxButton;

  constructor(categories: IcategoryCardData[]) {
    this.sliderButton = sliderButton;
    this.burgerMenu = new NavMenu(categories);
    this.header = createDomElement(defaultHeaderParams.header);
    this.headerWrapper = createDomElement(defaultHeaderParams.wrapper);
    this.title = createDomElement(defaultHeaderParams.title);

    this.header.appendChild(this.headerWrapper);
    this.headerWrapper.appendChild(this.burgerMenu.container);
    this.headerWrapper.appendChild(this.title);
    this.headerWrapper.appendChild(this.sliderButton.switchLabel);
  }
}
