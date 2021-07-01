import sliderButton from '../shared/create_slider_button';
import setOfCategories from '../set-of-categories/set_of_categories';
import CheckboxButton from '../shared/shared_classes/class_checkbox_button';
import CategoryCard from '../category-card/class_category_card';
import createDomElement from '../shared/shared_functions/create-dom-element';
import containerOfAllCategories from '../set-of-categories/create_container_of_all_categories';
import tmpAudioArray from './tmp_audio_array_for_game';
import getRandomIntInclusive from '../shared/shared_functions/get_random_value';
import gameModule from './constant_gameModule';
import Card from '../card/class_card';
import shuffle from '../shared/shared_functions/shuffle_array';
import GAME_CONSTANTS from '../shared/constants/game-constants';
import { gameData } from '../shared/input_data/cards_data/cards-data';
import PopUpWinLose from '../pop-up/class_pop_up';
import popUp from '../pop-up/create_pop_up';
import setOfNavItems from '../navigation-menu/set_of_navigation_items';

const { gameAudioDelay, popUpHideDelay } = GAME_CONSTANTS;

const sliderButtonModes = {
  train: 'train',
  game: 'game',
};

const defaultGameParams = {
  buttonStartGame: {
    tegName: 'button',
    classNames: ['button', 'button-start-game', 'hidden'],
    attributes: [[]],
    result: 'start game',
  },
  buttonRepeatAudio: {
    tegName: 'button',
    classNames: ['button', 'button-repeat', 'hidden'],
    attributes: [[]],
    result: 'Repeat',
  },
  starContainer: {
    tegName: 'div',
    classNames: ['star-container', 'hidden'],
    attributes: [[]],
  },
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

function playAudio(param: string): void {
  const audio = new Audio();
  audio.src = param;
  audio.autoplay = true;
}

function highlightNavItemOfAllCategories(): void {
  setOfNavItems.forEach((element) => {
    element.classList.remove('activated');
  });
  const navAllCategories = setOfNavItems.find((element) => element.getAttribute('id') === 'allCategories');
  (navAllCategories as HTMLElement).classList.add('activated');
}

export default class Game {
  sliderButton: CheckboxButton;

  playingCardContainer: null | HTMLElement;

  setOfCategories: CategoryCard[];

  playingCards: Card[];

  playingCard: Card | undefined;

  buttonStartGame: HTMLElement;

  buttonRepeatAudio: HTMLElement;

  starContainer: HTMLElement;

  starSuccessImgSrc: string;

  starFailureImgSrc: string;

  errorAudioSrc: string;

  correctAudioSrc: string;

  gameFailureAudioSrc: string;

  gameVictoryAudioSrc: string;

  popUp: PopUpWinLose;

  constructor() {
    this.sliderButton = sliderButton;
    this.setOfCategories = setOfCategories;
    this.popUp = popUp;
    this.buttonStartGame = createDomElement(defaultGameParams.buttonStartGame);
    this.buttonRepeatAudio = createDomElement(defaultGameParams.buttonRepeatAudio);
    this.starContainer = createDomElement(defaultGameParams.starContainer);

    this.playingCardContainer = null;
    this.playingCard = undefined;
    this.starFailureImgSrc = gameData.starEmptyImgAddress;
    this.starSuccessImgSrc = gameData.starFilledImgAddres;
    this.errorAudioSrc = gameData.audioErrorAddress;
    this.correctAudioSrc = gameData.audioCorectAddress;
    this.gameFailureAudioSrc = gameData.audioFailureAddress;
    this.gameVictoryAudioSrc = gameData.audioVictoryAddress;

    containerOfAllCategories.appendChild(this.buttonStartGame);
    containerOfAllCategories.appendChild(this.buttonRepeatAudio);
    containerOfAllCategories.appendChild(this.starContainer);
    containerOfAllCategories.appendChild(this.popUp.popUpContainer);

    this.playingCards = [];

    this.gameModInit();
    this.listenToStartGameButton();
    this.listenToRepeatButton();
  }

  createStar(filledStar: boolean): HTMLElement {
    const star = document.createElement('img');
    if (filledStar) {
      star.setAttribute('src', this.starSuccessImgSrc);
      star.classList.add('filled');
    } else {
      star.setAttribute('src', this.starFailureImgSrc);
      star.classList.add('empty');
    }
    return star;
  }

  toggleSliderButton(): void {
    if (this.sliderButton.switchSpan.innerHTML === sliderButtonModes.train) {
      this.sliderButton.switchSpan.innerHTML = sliderButtonModes.game;
      this.sliderButton.gameMod = true;
    } else {
      this.sliderButton.switchSpan.innerHTML = sliderButtonModes.train;
      this.sliderButton.gameMod = false;
    }
  }

  toggleGameModeForCards(setOfCards: Card[]): void {
    if (this.sliderButton.gameMod) {
      setOfCards.forEach((elem) => {
        elem.frontFooter.classList.add('hidden');
        elem.gameMod.classList.add('game-mode-true');
      });
      this.buttonStartGame.classList.remove('hidden');
    } else {
      setOfCards.forEach((elem) => {
        elem.frontFooter.classList.remove('hidden');
        elem.gameMod.classList.remove('game-mode-true');
      });
      this.buttonStartGame.classList.add('hidden');
    }
  }

  toggleGameModeForCategories(): void {
    this.setOfCategories.forEach((element) => {
      const { setOfCards } = element;
      this.toggleGameModeForCards(setOfCards);
    });
  }

  gameModInit(): void {
    this.sliderButton.switchLabel.addEventListener('click', (e) => {
      if (e.target === this.sliderButton.switchInput) {
        this.toggleSliderButton();
        this.toggleGameModeForCategories();
      }
    });
  }

  listenToStartGameButton(): void {
    this.buttonStartGame.addEventListener('click', () => {
      const activeCategory = setOfCategories.find(
        (element) => element.categoryContainer.classList.contains('active'),
      );
      if (activeCategory) {
        this.playingCardContainer = activeCategory.categoryContainer;
        this.playingCards = activeCategory.setOfCards;

        this.listenToPlayingCards();
        fillTmpAudioArray(activeCategory);

        this.buttonStartGame.classList.add('hidden');
        this.buttonRepeatAudio.classList.remove('hidden');
        this.playGame();
      }
    });
  }

  listenToRepeatButton(): void {
    this.buttonRepeatAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      this.playingCards[gameModule.cardsIndex].playAudio();
    });
  }

  listenToPlayingCards(): void {
    this.playingCards.forEach((element) => {
      element.card.addEventListener('click', (e) => {
        const playedCardText = this.playingCard?.frontTextString;
        if (playedCardText && (e.currentTarget as
                      HTMLElement).classList.contains(playedCardText)) {
          this.playingCards[gameModule.cardsIndex].gessSucceed();
          playAudio(this.correctAudioSrc);
          this.starContainer.appendChild(this.createStar(true));
          setTimeout(() => this.playGame(), gameAudioDelay);
        } else {
          playAudio(this.errorAudioSrc);
          this.starContainer.appendChild(this.createStar(false));
        }
      });
    });
  }

  playWord(): void {
    if (this.playingCard) {
      gameModule.cardsIndex = this.playingCards.indexOf(this.playingCard);
      this.playingCards[gameModule.cardsIndex].playAudio();
    }
  }

  playGame(): void {
    const index = getRandomIntInclusive(0, tmpAudioArray.length - 1);
    console.log(tmpAudioArray);
    this.playingCard = this.playingCards.find(
      (element) => element.audioSrc === tmpAudioArray[index],
    );

    this.playWord();

    if (!tmpAudioArray.length) this.finishGame();
  }

  finishGame(): void {
    let errorNbr = 0;
    this.starContainer.childNodes.forEach((element) => {
      if ((element as HTMLElement).classList.contains('empty')) errorNbr += 1;
    });

    if (errorNbr) {
      playAudio(this.gameFailureAudioSrc);
      this.popUp.popUpContainer.classList.remove('hidden');
      this.popUp.popUpFailureContainer.classList.remove('hidden');
    } else {
      playAudio(this.gameVictoryAudioSrc);
      this.popUp.popUpContainer.classList.remove('hidden');
      this.popUp.popUpVictoryContainer.classList.remove('hidden');
    }
    setTimeout(() => this.resetGame(), popUpHideDelay);
  }

  clearStarContainer(): void {
    while (this.starContainer.firstChild) {
      this.starContainer.firstChild.remove();
    }
    this.starContainer.classList.add('hidden');
  }

  hidePopUp(): void {
    this.popUp.popUpContainer.classList.add('hidden');
    this.popUp.popUpFailureContainer.classList.add('hidden');
    this.popUp.popUpVictoryContainer.classList.add('hidden');
    this.buttonRepeatAudio.classList.add('hidden');
  }

  returnDefaultState(): void {
    this.playingCards.forEach((element) => {
      element.card.classList.remove('disabled');
    });
    this.playingCardContainer = null;
    this.playingCard = undefined;
    this.playingCards = [];
  }

  showAllCategories(): void {
    this.setOfCategories.forEach((element) => {
      element.categoryContainer.classList.remove('active');
      element.categoryContainer.classList.add('hidden');
      element.setOfCardsContainer?.classList.add('hidden');
      element.categoryCard.classList.remove('hidden');
    });
  }

  resetGame(): void {
    this.hidePopUp();
    this.clearStarContainer();
    this.returnDefaultState();
    this.toggleSliderButton();
    this.toggleGameModeForCategories();
    this.showAllCategories();
    highlightNavItemOfAllCategories();
  }
}
