import createDomElement from '../shared_functions/create-dom-element';

const defaultBurgerMFenuButtonParams = {
  container: {
    tegName: 'div',
    classNames: ['burger-menu-container'],
    attributes: [[]],
  },
  input: {
    tegName: 'input',
    classNames: ['burger-menu-input'],
    attributes: [['type', 'checkbox'], ['id', 'burger-menu']],
  },
  label: {
    tegName: 'label',
    classNames: ['burger-menu-label'],
    attributes: [['for', 'burger-menu']],
  },
  spanFirst: {
    tegName: 'span',
    classNames: ['first'],
    attributes: [[]],
  },
  spanSecond: {
    tegName: 'span',
    classNames: ['second'],
    attributes: [[]],
  },
  spanThird: {
    tegName: 'span',
    classNames: ['third'],
    attributes: [[]],
  },
};

export default class BurgerMenuButton {
  container: HTMLElement;

  input: HTMLElement;

  label: HTMLElement;

  spanFirst: HTMLElement;

  spanSecond: HTMLElement;

  spanThird: HTMLElement;

  constructor() {
    this.container = createDomElement(defaultBurgerMFenuButtonParams.container);
    this.label = createDomElement(defaultBurgerMFenuButtonParams.label);
    this.input = createDomElement(defaultBurgerMFenuButtonParams.input);
    this.spanFirst = createDomElement(defaultBurgerMFenuButtonParams.spanFirst);
    this.spanSecond = createDomElement(defaultBurgerMFenuButtonParams.spanSecond);
    this.spanThird = createDomElement(defaultBurgerMFenuButtonParams.spanThird);

    this.container.appendChild(this.input);
    this.container.appendChild(this.label);
    this.label.appendChild(this.spanFirst);
    this.label.appendChild(this.spanSecond);
    this.label.appendChild(this.spanThird);
  }
}
