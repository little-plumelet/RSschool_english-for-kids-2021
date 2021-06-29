import createDomElement from '../shared/shared_functions/create-dom-element';
import IcardData from './interface_card_data';
import defaultCardParams from './default_card_data_html';
import Button from '../shared/shared_classes/class_button';
import { updateCardParams, clearCardParams } from './card-auxiliary_functions';
import CARD_CONSTANTS from '../shared/constants/card-constants';

const { buttonImgAddres } = CARD_CONSTANTS;

export default class Card {
  card: HTMLElement;

  cardFront: HTMLElement;

  frontFooter: HTMLElement;

  frontImage: HTMLElement;

  frontText: HTMLElement;

  frontButton: HTMLElement;

  cardBack: HTMLElement;

  backText: HTMLElement;

  audioSrc: string;

  constructor(params: IcardData) {
    const button = new Button(buttonImgAddres);

    updateCardParams(params);

    this.card = createDomElement(defaultCardParams.card);
    this.cardFront = createDomElement(defaultCardParams.cardFront);
    this.frontFooter = createDomElement(defaultCardParams.frontFooter);
    this.frontImage = createDomElement(defaultCardParams.frontImage);
    this.frontText = createDomElement(defaultCardParams.frontText);
    this.frontButton = button.button;
    this.frontButton.classList.add('button-rotate');
    this.cardBack = createDomElement(defaultCardParams.cardBack);
    this.backText = createDomElement(defaultCardParams.backText);
    this.audioSrc = params.audioAddres;

    this.cardBack.appendChild(this.backText);

    this.frontFooter.appendChild(this.frontText);
    this.frontFooter.appendChild(this.frontButton);
    this.cardFront.appendChild(this.frontImage);
    this.cardFront.appendChild(this.frontFooter);

    this.card.appendChild(this.cardFront);
    this.card.appendChild(this.cardBack);

    clearCardParams();

    this.listenToCard();
  }

  playAudio(): void {
    const audio = new Audio();
    audio.src = this.audioSrc;
    audio.autoplay = true;
  }

  /*
  сделаны две функции т.к. они вызываются различными действиями:
  первая на click, вторая на mouseleave
  */
  showBack(): void {
    this.card.classList.add('card-animated');
  }

  showFront(): void {
    this.card.classList.remove('card-animated');
  }

  listenToCard(): void {
    this.card.addEventListener('click', (e) => {
      if (e.target === this.cardFront) this.playAudio();
      if ((e.target as HTMLElement).closest('button') === this.frontButton) {
        this.showBack();
      }
    });

    this.card.addEventListener('mouseleave', () => { this.showFront(); });
  }
}
