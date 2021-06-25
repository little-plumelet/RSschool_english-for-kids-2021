import './styles.scss';
import Card from './card/class_card';
import animalsData from './shared/input_data/cards_data/animals-cards-data';

console.log('Hello World!');
const cardTmp = new Card(animalsData.cat);
const cardTmp2 = new Card(animalsData.cat);
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
