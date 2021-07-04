import Button from '../shared/shared_classes/class_button';
import createDomElement from '../shared/shared_functions/create-dom-element';
import StatisticTable from './class_statistic_table';
import statisticTable from './create_statistic_table';

const defaultStatisticPageParamms = {
  container: {
    tegName: 'div',
    classNames: ['statistics-container'],
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
  }
}
