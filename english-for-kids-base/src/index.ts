import './styles.scss';
import header from './header/create_header';
import containerOfAllCategories from './set-of-categories/create_container_of_all_categories';
import game from './game-mod/create-class-game';
// import IcardData from './card/interface-card-data';

/*
console.log('Hello World!');
const cardTmp = new Card(animalsData.tamedAnimals[0]);
const cardTmp2 = new Card(animalsData.tamedAnimals[1]);
document.body.appendChild(cardTmp.card);
document.body.appendChild(cardTmp2.card);

cardTmp.card.addEventListener('click', (e) => {
  console.log('click');
  console.log(e.target);
  cardTmp.playAudio();
  const button = (e.target as HTMLElement).closest('button');
  if (button === cardTmp.frontButton) {
    console.log('click_button');
    cardTmp.showBack();
  }
});
cardTmp.card.addEventListener('mouseleave', (e) => {
  console.log(e.target);
  cardTmp.showFront();
});

const set = animalsData.wildAnimals;
const newSet = new SetOfCards(set);
console.log(newSet);
// document.body.appendChild(newSet.setContainer);
*/

document.body.appendChild(header.header);
document.body.appendChild(containerOfAllCategories);

console.log(game);

function getRandomIntInclusive(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}
const numbers = new Set();
while ([...numbers].length < 500) {
  const a = getRandomIntInclusive(-2147483648, 2147483647);
  numbers.add(a);
}
const str = [...numbers].join(' ');
console.log(str);
