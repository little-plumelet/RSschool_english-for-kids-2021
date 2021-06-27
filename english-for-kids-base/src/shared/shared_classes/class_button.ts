import createDomElement from '../shared_functions/create-dom-element';

const defaultButtonParams = {
  button: {
    tegName: 'button',
    classNames: ['button'],
    attributes: [[]],
  },
  buttonImg: {
    tegName: 'img',
    classNames: ['button-image'],
    attributes: [[]],
  },
};

export default class Button {
  button: HTMLElement;

  buttonImg: HTMLElement;

  constructor(imgAddres: string) {
    this.button = createDomElement(defaultButtonParams.button);
    this.buttonImg = createDomElement(defaultButtonParams.buttonImg);
    this.buttonImg.setAttribute('src', imgAddres);

    this.button.appendChild(this.buttonImg);
  }
}
