import CheckboxButton from '../shared/shared_classes/class_checkbox_button';
import createDomElement from '../shared/shared_functions/create-dom-element';

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

  // burgerMenu: ;

  title: HTMLElement;

  switchButton: CheckboxButton;

  constructor() {
    this.header = createDomElement(defaultHeaderParams.header);
    this.headerWrapper = createDomElement(defaultHeaderParams.wrapper);
    this.title = createDomElement(defaultHeaderParams.title);
    this.switchButton = new CheckboxButton();

    this.header.appendChild(this.headerWrapper);
    this.headerWrapper.appendChild(this.title);
    this.headerWrapper.appendChild(this.switchButton.switchLabel);
  }
}
