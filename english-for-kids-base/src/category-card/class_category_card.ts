import createDomElement from '../shared/shared_functions/create-dom-element';
import Card from '../card/class_card';
import IcardData from '../card/interface_card_data';
import SetOfCards from '../set-of-cards/class_set_of_cards';
import IcategoryCardData from './interface_category_card_data';
import defaultCategoryCardParams from './default_category_card_data_html';
import Panel from './category_card_enum';
import { updateCategoryCardParams, clearCategoryCardParams } from './category_card_auxiliary_functions';
import { cardsData } from '../shared/input_data/cards_data/cards-data';
import setOfNavItems from '../navigation-menu/set_of_navigation_items';

export default class CategoryCard {
  categoryContainer: HTMLElement;

  categoryCard: HTMLElement;

  categoryCardFront: HTMLElement;

  frontFooter: HTMLElement;

  frontImage: HTMLElement;

  frontText: HTMLElement;

  setOfCardsContainer: HTMLElement | null;

  setOfCards: Card[];

  categoryId: string;

  constructor(params: IcategoryCardData) {
    updateCategoryCardParams(params);

    this.categoryId = params.categoryName;

    this.categoryContainer = createDomElement(defaultCategoryCardParams.categoryContainer);
    this.categoryCard = createDomElement(defaultCategoryCardParams.categoryCard);
    this.categoryCardFront = createDomElement(defaultCategoryCardParams.categoryCardFront);
    this.frontFooter = createDomElement(defaultCategoryCardParams.categoryCardfrontFooter);
    this.frontImage = createDomElement(defaultCategoryCardParams.frontImage);
    this.frontText = createDomElement(defaultCategoryCardParams.frontText);

    this.setOfCardsContainer = null;
    this.setOfCards = [];

    this.categoryContainer.setAttribute('id', this.categoryId);

    this.frontFooter.appendChild(this.frontText);
    this.categoryCardFront.appendChild(this.frontImage);
    this.categoryCardFront.appendChild(this.frontFooter);
    this.categoryCard.appendChild(this.categoryCardFront);
    this.categoryContainer.appendChild(this.categoryCard);

    this.createSetOfCardsOfCategory(params);

    clearCategoryCardParams();
    this.listenToCardsOfCategory();
  }

  createSetOfCardsOfCategory(params: IcategoryCardData): void {
    const setName = params.categoryName;
    const set = cardsData[Panel[setName as Panel]] as IcardData[];
    const newSet = new SetOfCards(set);
    this.setOfCards = newSet.setOfCards;
    this.setOfCardsContainer = newSet.setContainer;
    this.categoryContainer.appendChild(newSet.setContainer);
  }

  listenToCardsOfCategory(): void {
    this.categoryContainer.addEventListener('click', () => {
      this.revealCardsOfCategory();
      setOfNavItems.forEach((element) => {
        element.classList.remove('activated');
        if (this.categoryId === element.id) element.classList.add('activated');
      });
    });
  }

  revealCardsOfCategory(): void {
    (this.setOfCardsContainer as HTMLElement).classList.remove('hidden');
    (this.categoryContainer as HTMLElement).classList.add('active');
  }

  hideCardsOfCategory(): void {
    (this.setOfCardsContainer as HTMLElement).classList.add('hidden');
    (this.categoryContainer as HTMLElement).classList.remove('active');
  }
}
