import StatisticTableLine from './class_statistic_table_line';

const STAT_CONST = {
  trainClicks: 'trainClicks' as keyof StatisticTableLine,
  gameWrightClicks: 'gameWrightClicks' as keyof StatisticTableLine,
  errorClicks: 'errorClicks' as keyof StatisticTableLine,
  percent: 'percent' as keyof StatisticTableLine,
  nbr: 'nbr' as keyof StatisticTableLine,
};

export default STAT_CONST;
