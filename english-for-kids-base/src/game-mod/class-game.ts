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
  game: 'play',
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

  errorsNbr: number;

  constructor() {
    this.sliderButton = sliderButton;
    this.setOfCategories = setOfCategories;
    this.popUp = popUp;
    this.buttonStartGame = createDomElement(defaultGameParams.buttonStartGame);
    this.buttonRepeatAudio = createDomElement(defaultGameParams.buttonRepeatAudio);
    this.starContainer = createDomElement(defaultGameParams.starContainer);

    this.playingCardContainer = null;
    this.playingCard = undefined;
    this.errorsNbr = 0;
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
    this.listenToCategoriesCard();
    this.listenToStartGameButton();
    this.listenToRepeatButton();
    this.listenToNavList();
    this.listenToCards();
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
      this.toggleGameModeForCategories(true);
    } else {
      this.sliderButton.switchSpan.innerHTML = sliderButtonModes.train;
      (this.sliderButton.switchInput as HTMLInputElement).checked = false;
      this.sliderButton.gameMod = false;
      this.toggleGameModeForCategories(false);
      this.buttonRepeatAudio.classList.add('hidden');
    }
  }

  toggleStartGameButton(): void {
    if (this.sliderButton.gameMod) this.buttonStartGame.classList.remove('hidden');
    else this.buttonStartGame.classList.add('hidden');
  }

  toggleGameModeForCards(setOfCards: Card[]): void {
    if (this.sliderButton.gameMod) {
      setOfCards.forEach((elem) => {
        elem.frontFooter.classList.add('hidden');
        elem.gameMod.classList.add('game-mode-true');
      });
    } else {
      setOfCards.forEach((elem) => {
        elem.frontFooter.classList.remove('hidden');
        elem.gameMod.classList.remove('game-mode-true');
      });
    }
  }

  toggleGameModeForCategories(init: boolean): void {
    this.setOfCategories.forEach((element) => {
      const { setOfCards } = element;
      this.toggleGameModeForCards(setOfCards);
    });
    if (init) {
      this.setOfCategories.forEach((element) => {
        element.categoryCard.classList.add('game-mod');
      });
    } else {
      this.setOfCategories.forEach((element) => {
        element.categoryCard.classList.remove('game-mod');
      });
    }
  }

  gameModInit(): void {
    this.sliderButton.switchLabel.addEventListener('click', (e) => {
      const activatedCategory = setOfNavItems.find((element) => element.classList.contains('activated'));
      if (e.target === this.sliderButton.switchInput) {
        this.toggleSliderButton();
        if (!(activatedCategory?.getAttribute('id') === 'allCategories')) {
          this.toggleStartGameButton();
        }
      }
    });
  }

  listenToCategoriesCard(): void {
    this.setOfCategories.forEach((element) => {
      element.categoryCard.addEventListener('click', () => {
        if (this.sliderButton.gameMod) this.toggleStartGameButton();
      });
    });
  }

  listenToNavList(): void {
    setOfNavItems.forEach((element) => {
      element.addEventListener('click', () => {
        if (this.sliderButton.gameMod) this.resetGame();
      });
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

  fillStarContainer(starType: boolean): void {
    const star = this.createStar(starType);
    let starWidth = 0;
    const starContainerWidth = this.starContainer.getBoundingClientRect().width;
    if (!this.starContainer.children.length) {
      this.starContainer.appendChild(star);
    } else if (this.starContainer.children.length) {
      starWidth = (
        this.starContainer.lastChild as HTMLElement).getBoundingClientRect().left
        - (this.starContainer.firstChild as HTMLElement).getBoundingClientRect().left;
    }
    if ((starContainerWidth - 100) < starWidth) {
      this.starContainer.firstChild?.remove();
      this.starContainer.appendChild(star);
    } else {
      this.starContainer.appendChild(star);
    }
  }

  playWithCards(e: Event): void {
    const playedCardText = this.playingCard?.frontTextString;
    if (this.buttonStartGame.classList.contains('hidden')) {
      if (playedCardText && (e.currentTarget as
                    HTMLElement).classList.contains(playedCardText)) {
        this.playingCards[gameModule.cardsIndex].gessSucceed();
        playAudio(this.correctAudioSrc);
        this.fillStarContainer(true);
      } else {
        playAudio(this.errorAudioSrc);
        this.fillStarContainer(false);
        this.errorsNbr += 1;
      }
      setTimeout(() => this.playGame(), gameAudioDelay);
    }
  }

  listenToCards(): void {
    this.setOfCategories.forEach((element) => {
      element.setOfCards.forEach((elem) => {
        elem.card.addEventListener('click', this.playWithCards.bind(this));
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
    if (this.errorsNbr) {
      playAudio(this.gameFailureAudioSrc);
      this.popUp.popUpContainer.classList.remove('hidden');
      this.popUp.popUpFailureContainer.classList.remove('hidden');
      this.popUp.errorNbr.innerText = `Errors you made: ${this.errorsNbr}.`;
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
    this.errorsNbr = 0;
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
    if (tmpAudioArray.length) while (tmpAudioArray.length) tmpAudioArray.pop();
    this.hidePopUp();
    this.clearStarContainer();
    this.returnDefaultState();
    this.toggleSliderButton();
    this.toggleGameModeForCategories(false);
    this.toggleStartGameButton();
    this.showAllCategories();
    highlightNavItemOfAllCategories();
  }
}
