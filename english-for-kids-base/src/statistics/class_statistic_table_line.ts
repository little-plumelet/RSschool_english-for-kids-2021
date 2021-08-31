import createDomElement from '../shared/shared_functions/create-dom-element';
import { getLineFromLocalStorage } from './functions_for_local_storage';
import IstatisticLineParams from './interface_statistic_line_params';

const defaultTableLineParams = {
  tr: {
    tegName: 'tr',
    classNames: ['tr'],
    attributes: [[]],
  },
  th: {
    tegName: 'th',
    classNames: ['th'],
    attributes: [[]],
  },
  td: {
    tegName: 'td',
    classNames: ['td'],
    attributes: [[]],
  },
  arrow: {
    tegName: 'img',
    classNames: ['arrow', 'disc'],
    attributes: [['src', './public/images/arrow_down.png']],
  },
};

export default class StatisticTableLine {
  tr: HTMLElement;

  nbr: HTMLElement;

  nbrClicksArrow: HTMLElement | null;

  categoryName: HTMLElement;

  wordEl: HTMLElement;

  word: string;

  translation: HTMLElement;

  trainClicks: HTMLElement;

  trainClicksArrow: HTMLElement | null;

  gameWrightClicks: HTMLElement;

  gameClicksArrow: HTMLElement | null;

  errorClicks: HTMLElement;

  errorClicksArrow: HTMLElement | null;

  percent: HTMLElement;

  percentArrow: HTMLElement | null;

  constructor(params: IstatisticLineParams, tagType: string) {
    this.word = String(params.word);
    this.tr = createDomElement(defaultTableLineParams.tr);
    this.nbrClicksArrow = null;
    this.trainClicksArrow = null;
    this.gameClicksArrow = null;
    this.errorClicksArrow = null;
    this.percentArrow = null;
    if (tagType === 'th') {
      this.nbr = createDomElement(defaultTableLineParams.th);
      this.nbr.classList.add('nbr-click');
      this.nbrClicksArrow = createDomElement(defaultTableLineParams.arrow);
      this.categoryName = createDomElement(defaultTableLineParams.th);
      this.wordEl = createDomElement(defaultTableLineParams.th);
      this.translation = createDomElement(defaultTableLineParams.th);
      this.trainClicks = createDomElement(defaultTableLineParams.th);
      this.trainClicks.classList.add('train-click');
      this.trainClicksArrow = createDomElement(defaultTableLineParams.arrow);
      this.gameWrightClicks = createDomElement(defaultTableLineParams.th);
      this.gameWrightClicks.classList.add('game-click');
      this.gameClicksArrow = createDomElement(defaultTableLineParams.arrow);
      this.errorClicks = createDomElement(defaultTableLineParams.th);
      this.errorClicks.classList.add('error-click');
      this.errorClicksArrow = createDomElement(defaultTableLineParams.arrow);
      this.percent = createDomElement(defaultTableLineParams.th);
      this.percent.classList.add('percent');
      this.percentArrow = createDomElement(defaultTableLineParams.arrow);
    } else {
      this.nbr = createDomElement(defaultTableLineParams.td);
      this.categoryName = createDomElement(defaultTableLineParams.td);
      this.wordEl = createDomElement(defaultTableLineParams.td);
      this.translation = createDomElement(defaultTableLineParams.td);
      this.trainClicks = createDomElement(defaultTableLineParams.td);
      this.gameWrightClicks = createDomElement(defaultTableLineParams.td);
      this.errorClicks = createDomElement(defaultTableLineParams.td);
      this.percent = createDomElement(defaultTableLineParams.td);
    }

    this.fillCells(params);

    this.tr.appendChild(this.nbr);
    this.nbr.classList.add('nbr');
    if (this.nbrClicksArrow) this.nbr.appendChild(this.nbrClicksArrow);
    this.tr.appendChild(this.categoryName);
    this.tr.appendChild(this.wordEl);
    this.tr.appendChild(this.translation);
    this.tr.appendChild(this.trainClicks);
    if (this.trainClicksArrow) this.trainClicks.appendChild(this.trainClicksArrow);
    this.tr.appendChild(this.gameWrightClicks);
    if (this.gameClicksArrow) this.gameWrightClicks.appendChild(this.gameClicksArrow);
    this.tr.appendChild(this.errorClicks);
    if (this.errorClicksArrow) this.errorClicks.appendChild(this.errorClicksArrow);
    this.tr.appendChild(this.percent);
    if (this.percentArrow) this.percent.appendChild(this.percentArrow);
  }

  fillCells(params: IstatisticLineParams): void {
    this.nbr.innerText = String(params.nbr);
    this.categoryName.innerText = String(params.category);
    this.wordEl.innerText = String(params.word);
    this.translation.innerText = String(params.translation);
    this.trainClicks.innerText = String(params.trainClicks);
    this.gameWrightClicks.innerText = String(params.gameClicks);
    this.errorClicks.innerText = String(params.errorsNbr);
    this.percent.innerText = String(params.percent);
  }

  updateLine(word: string): void {
    const res = getLineFromLocalStorage(word);
    this.fillCells(res);
  }
}
