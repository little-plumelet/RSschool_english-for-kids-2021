import createDomElement from '../shared_functions/create-dom-element';

const defaultButtonParams = {
  tegName: 'button',
  classNames: ['button'],
  attributes: [[]],
};

export default class Button {
  button: HTMLElement;

  constructor() {
    this.button = createDomElement(defaultButtonParams);
  }
}
