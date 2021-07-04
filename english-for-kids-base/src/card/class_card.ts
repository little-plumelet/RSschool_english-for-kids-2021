import createDomElement from '../shared/shared_functions/create-dom-element';
import IcardData from './interface_card_data';
import defaultCardParams from './default_card_data_html';
import Button from '../shared/shared_classes/class_button';
import { updateCardParams, clearCardParams } from './card-auxiliary_functions';
import CARD_CONSTANTS from '../shared/constants/card-constants';
import tmpAudioArray from '../game-mod/tmp_audio_array_for_game';
import IstatisticLineParams from '../statistics/interface_statistic_line_params';
import { updateLineInLocalStorage } from '../statistics/functions_for_local_storage';
import setOfStatisticTableLines from '../statistics/setOfStatisticTableLines';

const { buttonImgAddres } = CARD_CONSTANTS;

export default class Card {
  card: HTMLElement;

  cardFront: HTMLElement;

  frontFooter: HTMLElement;

  frontImage: HTMLElement;

  frontTextString: string;

  frontText: HTMLElement;

  frontButton: HTMLElement;

  cardBack: HTMLElement;

  backText: HTMLElement;

  backTextString: string;

  audioSrc: string;

  gameMod: HTMLElement;

  gameModGessed: boolean;

  cardStatisticParams: IstatisticLineParams;

  constructor(params: IcardData) {
    const button = new Button(buttonImgAddres);

    updateCardParams(params);

    this.card = createDomElement(defaultCardParams.card);
    this.card.classList.add(params.word);
    this.cardFront = createDomElement(defaultCardParams.cardFront);
    this.frontFooter = createDomElement(defaultCardParams.frontFooter);
    this.frontImage = createDomElement(defaultCardParams.frontImage);
    this.frontText = createDomElement(defaultCardParams.frontText);
    this.frontTextString = params.word;
    this.frontButton = button.button;
    this.frontButton.classList.add('button-rotate');
    this.cardBack = createDomElement(defaultCardParams.cardBack);
    this.backText = createDomElement(defaultCardParams.backText);
    this.backTextString = params.translation;
    this.audioSrc = params.audioAddres;
    this.gameMod = createDomElement(defaultCardParams.gameMode);
    this.gameModGessed = false;
    this.cardStatisticParams = {};

    this.cardBack.appendChild(this.backText);

    this.frontFooter.appendChild(this.frontText);
    this.frontFooter.appendChild(this.frontButton);
    this.cardFront.appendChild(this.frontImage);
    this.cardFront.appendChild(this.frontFooter);

    this.card.appendChild(this.cardFront);
    this.card.appendChild(this.cardBack);

    clearCardParams();

    this.listenToCard();
    this.createCardStatisticParams();
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

  gessSucceed(): void {
    this.card.classList.add('disabled');
    this.gameModGessed = true;
    tmpAudioArray.splice(tmpAudioArray.indexOf(this.audioSrc), 1);
  }

  listenToCard(): void {
    this.card.addEventListener('click', (e) => {
      if (!this.gameMod.classList.contains('game-mode-true')) {
        if (e.target === this.cardFront) this.playAudio();
        if ((e.target as HTMLElement).closest('button') === this.frontButton) {
          this.showBack();
        }
        this.cardStatisticParams.trainClicks = String(
          Number(this.cardStatisticParams.trainClicks) + 1,
        );
        updateLineInLocalStorage(this.frontTextString, this.cardStatisticParams);
        const lineForUpdate = setOfStatisticTableLines.find(
          (element) => element.word === this.frontTextString,
        );
        lineForUpdate?.updateLine(this.frontTextString);
      }
    });

    this.card.addEventListener('mouseleave', () => { this.showFront(); });
  }

  createCardStatisticParams(): void {
    this.cardStatisticParams.nbr = 0;
    this.cardStatisticParams.word = this.frontTextString;
    this.cardStatisticParams.translation = this.backTextString;
    this.cardStatisticParams.trainClicks = 0;
    this.cardStatisticParams.gameClicks = 0;
    this.cardStatisticParams.errorsNbr = 0;
    this.cardStatisticParams.percent = 0;
  }
}
