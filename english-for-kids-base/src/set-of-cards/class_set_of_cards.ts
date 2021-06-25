import Card from '../card/class_card';
import IcardData from '../card/interface-card-data';
import defaultSetOfCardsParams from './default_set_of_cards_data_html';
import createDomElement from '../shared/shared_functions/create-dom-element';

export default class SetOfCards {
  setOfCards: Card[];

  setContainer: HTMLElement;

  constructor(params: IcardData[]) { // params: IcardData
    this.setContainer = createDomElement(defaultSetOfCardsParams.container);
    this.setOfCards = [];
    this.createSetOfCards(params);
  }

  createSetOfCards(params: IcardData[]):void {
    params.forEach((element) => {
      const card = new Card(element);
      this.setOfCards.push(card);
    });
    this.renderSetOfCards();
  }

  renderSetOfCards(): void {
    this.setOfCards.forEach((element) => {
      this.setContainer.appendChild(element.card);
    });
  }
}
