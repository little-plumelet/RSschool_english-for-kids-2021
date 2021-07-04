import IstatisticLineParams from './interface_statistic_line_params';

function createLineInLocalStorage(word:string, cardStatisticParams: IstatisticLineParams): void {
  localStorage.setItem(word, JSON.stringify(cardStatisticParams));
}

function updateLineInLocalStorage(word:string, cardStatisticParams: IstatisticLineParams): void {
  localStorage.setItem(word, JSON.stringify(cardStatisticParams));
}

function getLineFromLocalStorage(word: string): IstatisticLineParams {
  let res;
  const json = localStorage.getItem(word);
  if (json) res = JSON.parse(json);
  return res as IstatisticLineParams;
}

export {
  createLineInLocalStorage,
  updateLineInLocalStorage,
  getLineFromLocalStorage,
};
