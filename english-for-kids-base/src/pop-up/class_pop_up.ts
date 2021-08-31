import createDomElement from '../shared/shared_functions/create-dom-element';

const defaultPoPUpParams = {
  container: {
    tegName: 'div',
    classNames: ['pop-up-container-cover', 'hidden'],
    attributes: [[]],
  },
  containerFailure: {
    tegName: 'div',
    classNames: ['pop-up-container', 'pop-up-container-failure', 'hidden'],
    attributes: [[]],
  },
  imgFailure: {
    tegName: 'img',
    classNames: ['pop-up-failure'],
    attributes: [['src', './public/images/game-failure.png']],
  },
  errorsNbr: {
    tegName: 'span',
    classNames: ['pop-up-failure-nbr'],
    attributes: [[]],
  },
  containerVictory: {
    tegName: 'div',
    classNames: ['pop-up-container', 'pop-up-container-victory', 'hidden'],
    attributes: [[]],
  },
  imgVictory: {
    tegName: 'img',
    classNames: ['pop-up-victory', 'hidden'],
    attributes: [['src', './public/images/game-victory.png']],
  },
};
export default class PopUpWinLose {
  popUpContainer: HTMLElement;

  popUpVictoryContainer: HTMLElement;

  popUpVictoryImg: HTMLElement;

  popUpFailureContainer: HTMLElement;

  popUpFailureImg: HTMLElement;

  errorNbr: HTMLElement;

  constructor() {
    this.popUpContainer = createDomElement(defaultPoPUpParams.container);
    this.popUpFailureContainer = createDomElement(defaultPoPUpParams.containerFailure);
    this.popUpFailureImg = createDomElement(defaultPoPUpParams.imgFailure);
    this.errorNbr = createDomElement(defaultPoPUpParams.errorsNbr);
    this.popUpVictoryContainer = createDomElement(defaultPoPUpParams.containerVictory);
    this.popUpVictoryImg = createDomElement(defaultPoPUpParams.imgVictory);

    this.popUpContainer.appendChild(this.popUpVictoryContainer);
    this.popUpVictoryContainer.appendChild(this.popUpVictoryImg);
    this.popUpContainer.appendChild(this.popUpFailureContainer);
    this.popUpFailureContainer.appendChild(this.popUpFailureImg);
    this.popUpFailureContainer.appendChild(this.errorNbr);
  }
}
