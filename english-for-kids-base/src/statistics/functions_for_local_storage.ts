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

function resetAllLinesInLocalStorage(): void {
  const itemsArr = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const item = localStorage.getItem(String(localStorage.key(i)));
    if (item) itemsArr.push(JSON.parse(item) as IstatisticLineParams);
  }
  for (let i = 0; i < itemsArr.length; i += 1) {
    itemsArr[i].errorsNbr = 0;
    itemsArr[i].gameClicks = 0;
    itemsArr[i].trainClicks = 0;
    itemsArr[i].percent = 0;
    updateLineInLocalStorage(String(itemsArr[i].word), itemsArr[i]);
  }
  // localStorage.setItem(word, JSON.stringify(cardStatisticParams))
}

export {
  createLineInLocalStorage,
  updateLineInLocalStorage,
  getLineFromLocalStorage,
  resetAllLinesInLocalStorage,
};
