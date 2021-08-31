import createDomElement from '../shared_functions/create-dom-element';

const defaultCheckboxButtonParams = {
  buttonLabel: {
    tegName: 'label',
    classNames: ['switch-game'],
    attributes: [['type', 'checkbox']],
  },
  buttonInput: {
    tegName: 'input',
    classNames: ['switch-game-input'],
    attributes: [['type', 'checkbox']],
  },
  buttonText: {
    tegName: 'span',
    classNames: ['switch-game-text', 'round'],
    attributes: [[]],
    result: 'train',
  },
};

export default class CheckboxButton {
  switchLabel: HTMLElement;

  switchInput: HTMLElement;

  switchSpan: HTMLElement;

  gameMod: boolean;

  constructor() {
    this.switchLabel = createDomElement(defaultCheckboxButtonParams.buttonLabel);
    this.switchInput = createDomElement(defaultCheckboxButtonParams.buttonInput);
    this.switchSpan = createDomElement(defaultCheckboxButtonParams.buttonText);
    this.gameMod = false;

    this.switchLabel.appendChild(this.switchInput);
    this.switchLabel.appendChild(this.switchSpan);
  }
}
