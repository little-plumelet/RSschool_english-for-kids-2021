import Card from '../card/class_card';
// import IcategoryCardData from '../category-card/interface_category_card_data';
import setOfCategories from '../set-of-categories/set_of_categories';
import Button from '../shared/shared_classes/class_button';
import createDomElement from '../shared/shared_functions/create-dom-element';
import StatisticTable from './class_statistic_table';
import StatisticTableLine from './class_statistic_table_line';
import statisticTable from './create_statistic_table';
import { resetAllLinesInLocalStorage } from './functions_for_local_storage';
import setOfStatisticTableLines from './setOfStatisticTableLines';
import { sortTableError } from './sort_functions/sort_functions';
import GAME_CONSTANTS from '../shared/constants/game-constants';
// import CategoryCard from '../category-card/class_category_card';

const { cardsNbr } = GAME_CONSTANTS;

const defaultStatisticPageParamms = {
  container: {
    tegName: 'div',
    classNames: ['statistics-container', 'hidden'],
    attributes: [[]],
  },
  buttonContainer: {
    tegName: 'div',
    classNames: ['statistics-button-container'],
    attributes: [[]],
  },
  buttonReset: {
    tegName: 'span',
    classNames: ['reset-text'],
    attributes: [[]],
    result: 'Reset',
  },
  buttonRepeat: {
    tegName: 'span',
    classNames: ['repeat-text'],
    attributes: [[]],
    result: 'Repeat difficult words',
  },
};

export default class StatisticsPage {
  container: HTMLElement;

  buttonContainer: HTMLElement;

  buttonReset: Button;

  buttonResetEl: HTMLElement;

  buttonRepeat: Button;

  buttonRepeatEl: HTMLElement;

  table: StatisticTable;

  tablEl: HTMLElement;

  constructor() {
    const spanButtonReset = createDomElement(defaultStatisticPageParamms.buttonReset);
    const spanButtonRepeat = createDomElement(defaultStatisticPageParamms.buttonRepeat);
    this.container = createDomElement(defaultStatisticPageParamms.container);
    this.buttonContainer = createDomElement(defaultStatisticPageParamms.buttonContainer);
    this.buttonReset = new Button('./public/images/reset.png');
    this.buttonResetEl = this.buttonReset.button;
    this.buttonResetEl.appendChild(spanButtonReset);
    this.buttonResetEl.classList.add('statistics-reset-button');
    this.buttonRepeat = new Button('./public/images/repeat.png');
    this.buttonRepeatEl = this.buttonRepeat.button;
    this.buttonRepeatEl.classList.add('statistics-repeat-button');
    this.buttonRepeatEl.appendChild(spanButtonRepeat);
    this.table = statisticTable;
    this.tablEl = statisticTable.table;

    this.container.appendChild(this.buttonContainer);
    this.container.appendChild(this.tablEl);
    this.buttonContainer.appendChild(this.buttonRepeatEl);
    this.buttonContainer.appendChild(this.buttonResetEl);

    this.listenToResetButton();
    this.listenToRepeatButton();
  }

  listenToResetButton(): void {
    this.buttonResetEl.addEventListener('click', () => {
      resetAllLinesInLocalStorage();
      this.table.clearTable();
      this.table.fillTableWithTr();
    });
  }

  listenToRepeatButton(): void {
    this.buttonRepeatEl.addEventListener('click', () => {
      // let category: CategoryCard;

      const setOfStatisticTableLinesTmp: StatisticTableLine[] = [];
      setOfStatisticTableLines.forEach((element) => setOfStatisticTableLinesTmp.push(element));
      const set: StatisticTableLine[] = sortTableError('disc');
      const setOfdifficultWords: Card[] = [];

      for (let i = 0; i < cardsNbr; i += 1) {
        if (set[i].errorClicks) {
          let card;
          setOfCategories.forEach((element) => {
            card = element.setOfCards.find((elem) => elem.frontTextString === set[i].word);
            if (card) setOfdifficultWords.push(card);
          });
        }
      }
      for (let i = 0; i < setOfStatisticTableLinesTmp.length; i += 1) {
        setOfStatisticTableLines.push(setOfStatisticTableLinesTmp[i]);
      }
      /*
      const categoryParams: IcategoryCardData = {
        categoryName: 'difficultWords',
        title: 'difficult words',
        imgAddress: setOfdifficultWords[0].imgSrc,
      };

       category = new CategoryCard(categoryParams);
       */
    });
  }
}
