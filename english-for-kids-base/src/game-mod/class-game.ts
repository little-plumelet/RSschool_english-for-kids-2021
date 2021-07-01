import sliderButton from '../shared/create_slider_button';
import setOfCategories from '../set-of-categories/set_of_categories';
import CheckboxButton from '../shared/shared_classes/class_checkbox_button';
import CategoryCard from '../category-card/class_category_card';
import createDomElement from '../shared/shared_functions/create-dom-element';
import containerOfAllCategories from '../set-of-categories/create_container_of_all_categories';
import tmpAudioArray from './tmp_audio_array_for_game';
import getRandomIntInclusive from '../shared/shared_functions/get_random_value';
import IAnswer from './interfaces_for_answer';
import gameModWait from './constant_gameMod_wait';
import Card from '../card/class_card';
import shuffle from '../shared/shared_functions/shuffle_array';

const sliderButtonModes = {
  train: 'train',
  game: 'game',
};

function fillTmpAudioArray(activeCategory: CategoryCard): void {
  const cards = activeCategory.setOfCards;
  let tmpArray: string[] = [];
  cards.forEach((element) => {
    tmpArray.push(element.audioSrc);
  });
  tmpArray = shuffle(tmpArray);
  tmpArray.map((e) => tmpAudioArray.push(e));
}

const defaultGameParams = {
  buttonStartGame: {
    tegName: 'button',
    classNames: ['button-start-game', 'hidden'],
    attributes: [[]],
    result: 'start game',
  },
};

export default class Game {
  sliderButton: CheckboxButton;

  setOfCategories: CategoryCard[];

  buttonStartGame: HTMLElement;

  cards: Card[];

  rightAnswers: IAnswer[];

  wrongAnswers: IAnswer[];

  constructor() {
    this.sliderButton = sliderButton;
    this.setOfCategories = setOfCategories;
    this.buttonStartGame = createDomElement(defaultGameParams.buttonStartGame);
    containerOfAllCategories.appendChild(this.buttonStartGame);

    this.rightAnswers = [];
    this.wrongAnswers = [];
    this.cards = [];

    this.gameModInit();
    this.listenToStartGameButton();
  }

  toggleSliderButton(): void {
    if (this.sliderButton.switchSpan.innerHTML === sliderButtonModes.train) {
      this.sliderButton.switchSpan.innerHTML = sliderButtonModes.game;
    } else this.sliderButton.switchSpan.innerHTML = sliderButtonModes.train;
  }

  gameModInit(): void {
    this.sliderButton.switchLabel.addEventListener('click', (e) => {
      if (e.target === this.sliderButton.switchInput) {
        this.toggleSliderButton();
        setOfCategories.forEach((element) => {
          const { setOfCards } = element;
          setOfCards.forEach((elem) => {
            elem.frontFooter.classList.add('hidden');
            elem.gameMod.classList.add('game-mode-true');
            this.buttonStartGame.classList.remove('hidden');
          });
        });
      }
    });
  }

  listenToStartGameButton(): void {
    this.buttonStartGame.addEventListener('click', () => {
      const activeCategory = setOfCategories.find((element) => element.categoryContainer.classList.contains('active'));
      if (activeCategory) {
        fillTmpAudioArray(activeCategory);
        this.cards = activeCategory.setOfCards;
        this.playGame(activeCategory);
      }
    });
  }

  playGame(activeCategory: CategoryCard): void {
    const index = getRandomIntInclusive(0, tmpAudioArray.length - 1);
    console.log(tmpAudioArray);
    const card = this.cards.find((element) => element.audioSrc === tmpAudioArray[index]);

    while (!gameModWait.wait && card) {
      const cardsIndex = this.cards.indexOf(card);
      this.cards[cardsIndex].playAudio();
      this.cards[cardsIndex].gameModAudioPlayed = true;
      gameModWait.wait = true;
    }
    if (tmpAudioArray.length) {
      setTimeout(() => this.playGame(activeCategory), 1000);
    }
  }
}
