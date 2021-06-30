import CategoryCard from '../../category-card/class_category_card';
import getRandomIntInclusive from './get_random_value';
import gameModWait from '../../game-mod/constant_gameMod_wait';

function playGame(activeCategory: CategoryCard[]): void {
  const cards = activeCategory[0].setOfCards;
  const index = getRandomIntInclusive(0, cards.length - 1);
  console.log(cards);
  while (!gameModWait.wait) {
    cards[index].playAudio();
    cards[index].gameModAudioPlayed = true;
    if (cards[index].gameModGessed) console.log('GESSED');
    gameModWait.wait = true;
  }
}

export default playGame;
