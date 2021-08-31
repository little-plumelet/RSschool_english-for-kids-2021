import getRandomIntInclusive from './get_random_value';

export default function shuffle(array: string[]): string[] {
  const res = array;
  for (let i = res.length - 1; i > 0; i -= 1) {
    const j = getRandomIntInclusive(0, i);
    const tmp = res[i];
    res[i] = res[j];
    res[j] = tmp;
  }
  return res;
}
