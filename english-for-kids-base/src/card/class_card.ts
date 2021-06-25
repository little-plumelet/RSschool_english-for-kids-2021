import createDomElement from '../shared/shared_functions/create-dom-element';
import IcardData from './interface-card-data';
import defaultCardParams from './default_card_data';
import Button from '../shared/shared_classes/class-button';
import { updateCardParams, clearCardParams } from './auxiliary_functions';

export default class Card {
  card: HTMLElement;

  cardFront: HTMLElement;

  frontFooter: HTMLElement;

  frontImage: HTMLElement;

  frontText: HTMLElement;

  frontButton: HTMLElement;

  cardBack: HTMLElement;

  backText: HTMLElement;

  constructor(params: IcardData) {
    const button = new Button();
    updateCardParams(params);
    this.card = createDomElement(defaultCardParams.card);
    this.cardFront = createDomElement(defaultCardParams.cardFront);
    this.frontFooter = createDomElement(defaultCardParams.frontFooter);
    this.frontImage = createDomElement(defaultCardParams.frontImage);
    this.frontText = createDomElement(defaultCardParams.frontText);
    this.frontButton = button.button;
    this.cardBack = createDomElement(defaultCardParams.cardBack);
    this.backText = createDomElement(defaultCardParams.backText);

    this.cardBack.appendChild(this.backText);

    this.frontFooter.appendChild(this.frontText);
    this.frontFooter.appendChild(this.frontButton);
    this.cardFront.appendChild(this.frontImage);
    this.cardFront.appendChild(this.frontFooter);

    this.card.appendChild(this.cardFront);
    this.card.appendChild(this.cardBack);

    clearCardParams();
    console.log(defaultCardParams);
  }
}
