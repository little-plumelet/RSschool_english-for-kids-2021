import setOfCategories from '../set-of-categories/set_of_categories';
import createDomElement from '../shared/shared_functions/create-dom-element';
import StatisticTableLine from './class_statistic_table_line';
import { createLineInLocalStorage, getLineFromLocalStorage } from './functions_for_local_storage';
import setOfStatisticTableLines from './setOfStatisticTableLines';
import sortTable from './sort_functions/sort_functions';
import STAT_CONST from './statistic-constants';

const {
  trainClicks,
  gameWrightClicks,
  errorClicks,
  percent,
  nbr,
} = STAT_CONST;

const defaultTableParams = {
  table: {
    tegName: 'table',
    classNames: ['table-statistics'],
    attributes: [[]],
  },
  headerTr: {
    tegName: 'tr',
    classNames: ['tr-header'],
    attributes: [[]],
  },
  ArrowUpRed: {
    tegName: 'img',
    classNames: ['arrow', 'arrow-up'],
    attributes: [['src', './public/images/arrow_up_red.png']],
  },
  ArrowDownRed: {
    tegName: 'img',
    classNames: ['arrow', 'arrow-hidden', 'arrow-down'],
    attributes: [['src', './public/images/arrow_down_red.png']],
  },
  ArrowDown: {
    tegName: 'img',
    classNames: ['arrow', 'arrow-hidden', 'arrow-down_black'],
    attributes: [['src', './public/images/arrow_down.png']],
  },
};

const defaultHederLineParams = {
  nbr: '№',
  category: 'Category',
  word: 'Word',
  translation: 'Translation',
  trainClicks: 'Train clicks',
  gameClicks: 'Game: wright clicks',
  errorsNbr: 'Game: wrong clicks',
  percent: '%',
};

function toggleSortOrder(element: HTMLElement): string {
  if (element.classList.contains('disc')) {
    element.classList.remove('disc');
    element.classList.add('asc');
    element.setAttribute('src', './public/images/arrow_up_colored.png');
    return 'asc';
  }

  element.classList.add('disc');
  element.classList.remove('asc');
  element.setAttribute('src', './public/images/arrow_down_colored.png');
  return 'disc';
}

export default class StatisticTable {
  table: HTMLElement;

  tableHeaderLine: StatisticTableLine;

  tableHeaderLineEl: HTMLElement;

  indexNbr: number;

  constructor() {
    this.indexNbr = 1;
    this.table = createDomElement(defaultTableParams.table);
    this.tableHeaderLine = new StatisticTableLine(defaultHederLineParams, 'th');
    this.tableHeaderLineEl = this.tableHeaderLine.tr;

    this.table.appendChild(this.tableHeaderLineEl);

    this.fillTableWithTr();
    this.listenToHeaderLine();
  }

  async fillTableWithTr(): Promise<void> {
    this.indexNbr = 1;
    while (setOfStatisticTableLines.length) setOfStatisticTableLines.pop();
    for (let i = 0; i < setOfCategories.length; i += 1) {
      const category = setOfCategories[i];
      let tr;
      for (let j = 0; j < category.setOfCards.length; j += 1) {
        const card = category.setOfCards[j];
        card.cardStatisticParams.category = setOfCategories[i].frontTextStr;
        card.cardStatisticParams.nbr = this.indexNbr;
        this.indexNbr += 1;
        if (!getLineFromLocalStorage(String(card.cardStatisticParams.word))) {
          createLineInLocalStorage(String(card.cardStatisticParams.word), card.cardStatisticParams);
          tr = new StatisticTableLine(card.cardStatisticParams, 'td');
        } else {
          tr = new StatisticTableLine(getLineFromLocalStorage(String(card.cardStatisticParams.word)), 'td');
        }
        setOfStatisticTableLines.push(tr);
        this.table.appendChild(tr.tr);
      }
    }
  }

  sort(element: HTMLElement, key: keyof StatisticTableLine,
    onSort: (sortOrder: string, key: keyof StatisticTableLine) => StatisticTableLine[]): void {
    let sortOrder = '';

    if (element.lastChild) sortOrder = toggleSortOrder(element.lastChild as HTMLElement);
    const res = onSort(sortOrder, key);
    for (let i = 0; i < res.length; i += 1) {
      setOfStatisticTableLines.push(res[i]);
    }
    this.renderSortedTable();
  }

  handleTrainClick(element: HTMLElement): void {
    this.sort(element, trainClicks, sortTable);
  }

  handleGameClick(element: HTMLElement): void {
    this.sort(element, gameWrightClicks, sortTable);
  }

  handleErrorClick(element: HTMLElement): void {
    this.sort(element, errorClicks, sortTable);
  }

  handlePercentClick(element: HTMLElement): void {
    this.sort(element, percent, sortTable);
  }

  handleNbrClick(element: HTMLElement): void {
    this.sort(element, nbr, sortTable);
  }

  listenToHeaderLine(): void {
    this.tableHeaderLineEl.addEventListener('click', (e) => {
      const element = e.target as HTMLElement;
      if (element.classList.contains('train-click')) this.handleTrainClick(element);
      else if (element.parentElement?.classList.contains('train-click')) {
        this.handleTrainClick(element.parentElement);
      }
      if (element.classList.contains('game-click')) this.handleGameClick(element);
      else if (element.parentElement?.classList.contains('game-click')) {
        this.handleGameClick(element.parentElement);
      }
      if (element.classList.contains('error-click')) this.handleErrorClick(element);
      else if (element.parentElement?.classList.contains('error-click')) {
        this.handleErrorClick(element.parentElement);
      }
      if (element.classList.contains('percent')) this.handlePercentClick(element);
      else if (element.parentElement?.classList.contains('percent')) {
        this.handleNbrClick(element.parentElement);
      }
      if (element.classList.contains('nbr-click')) this.handleNbrClick(element);
      else if (element.parentElement?.classList.contains('nbr-click')) {
        this.handleNbrClick(element.parentElement);
      }
    });
  }

  clearTable(): void {
    while (this.table.childNodes.length > 1) this.table.lastChild?.remove();
  }

  renderSortedTable(): void {
    this.clearTable();
    setOfStatisticTableLines.forEach((element) => {
      this.table.appendChild(element.tr);
    });
  }
}
