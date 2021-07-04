import setOfStatisticTableLines from '../setOfStatisticTableLines';
import StatisticTableLine from '../class_statistic_table_line';

function sortTableTrained(order: string): StatisticTableLine[] {
  const res = [];

  if (order === 'asc') {
    while (setOfStatisticTableLines.length) {
      let min = Number(setOfStatisticTableLines[0].trainClicks.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (min > Number(setOfStatisticTableLines[i].trainClicks.innerText)) {
          j = i;
          min = Number(setOfStatisticTableLines[i].trainClicks.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  } else if (order === 'disc') {
    while (setOfStatisticTableLines.length) {
      let max = Number(setOfStatisticTableLines[0].trainClicks.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (max < Number(setOfStatisticTableLines[i].trainClicks.innerText)) {
          j = i;
          max = Number(setOfStatisticTableLines[i].trainClicks.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  }
  return res;
}

function sortTableGame(order: string): StatisticTableLine[] {
  const res = [];

  if (order === 'asc') {
    while (setOfStatisticTableLines.length) {
      let min = Number(setOfStatisticTableLines[0].gameWrightClicks.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (min > Number(setOfStatisticTableLines[i].gameWrightClicks.innerText)) {
          j = i;
          min = Number(setOfStatisticTableLines[i].gameWrightClicks.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  } else if (order === 'disc') {
    while (setOfStatisticTableLines.length) {
      let max = Number(setOfStatisticTableLines[0].trainClicks.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (max < Number(setOfStatisticTableLines[i].gameWrightClicks.innerText)) {
          j = i;
          max = Number(setOfStatisticTableLines[i].gameWrightClicks.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  }
  return res;
}

function sortTableError(order: string): StatisticTableLine[] {
  const res = [];

  if (order === 'asc') {
    while (setOfStatisticTableLines.length) {
      let min = Number(setOfStatisticTableLines[0].errorClicks.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (min > Number(setOfStatisticTableLines[i].errorClicks.innerText)) {
          j = i;
          min = Number(setOfStatisticTableLines[i].errorClicks.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  } else if (order === 'disc') {
    while (setOfStatisticTableLines.length) {
      let max = Number(setOfStatisticTableLines[0].errorClicks.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (max < Number(setOfStatisticTableLines[i].errorClicks.innerText)) {
          j = i;
          max = Number(setOfStatisticTableLines[i].errorClicks.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  }
  return res;
}

function sortTablePercent(order: string): StatisticTableLine[] {
  const res = [];

  if (order === 'asc') {
    while (setOfStatisticTableLines.length) {
      let min = Number(setOfStatisticTableLines[0].percent.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (min > Number(setOfStatisticTableLines[i].percent.innerText)) {
          j = i;
          min = Number(setOfStatisticTableLines[i].percent.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  } else if (order === 'disc') {
    while (setOfStatisticTableLines.length) {
      let max = Number(setOfStatisticTableLines[0].percent.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (max < Number(setOfStatisticTableLines[i].percent.innerText)) {
          j = i;
          max = Number(setOfStatisticTableLines[i].percent.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  }
  return res;
}

function sortTableNbr(order: string): StatisticTableLine[] {
  const res = [];

  if (order === 'asc') {
    while (setOfStatisticTableLines.length) {
      let min = Number(setOfStatisticTableLines[0].nbr.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (min > Number(setOfStatisticTableLines[i].nbr.innerText)) {
          j = i;
          min = Number(setOfStatisticTableLines[i].nbr.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  } else if (order === 'disc') {
    while (setOfStatisticTableLines.length) {
      let max = Number(setOfStatisticTableLines[0].nbr.innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (max < Number(setOfStatisticTableLines[i].nbr.innerText)) {
          j = i;
          max = Number(setOfStatisticTableLines[i].nbr.innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  }
  return res;
}

export {
  sortTableTrained,
  sortTableGame,
  sortTableError,
  sortTablePercent,
  sortTableNbr,
};
