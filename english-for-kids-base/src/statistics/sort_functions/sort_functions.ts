import setOfStatisticTableLines from '../setOfStatisticTableLines';
import StatisticTableLine from '../class_statistic_table_line';

function sortTable(order: string, key: keyof StatisticTableLine): StatisticTableLine[] {
  const res = [];

  if (order === 'asc') {
    while (setOfStatisticTableLines.length) {
      let min = Number((setOfStatisticTableLines[0][key] as HTMLElement).innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (min > Number((setOfStatisticTableLines[i][key] as HTMLElement).innerText)) {
          j = i;
          min = Number((setOfStatisticTableLines[i][key] as HTMLElement).innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  } else if (order === 'disc') {
    while (setOfStatisticTableLines.length) {
      let max = Number((setOfStatisticTableLines[0][key] as HTMLElement).innerText);
      let j = 0;
      for (let i = 1; i < setOfStatisticTableLines.length; i += 1) {
        if (max < Number((setOfStatisticTableLines[i][key] as HTMLElement).innerText)) {
          j = i;
          max = Number((setOfStatisticTableLines[i][key] as HTMLElement).innerText);
        }
      }
      res.push(setOfStatisticTableLines[j]);
      setOfStatisticTableLines.splice(j, 1);
    }
  }
  return res;
}

export default sortTable;
