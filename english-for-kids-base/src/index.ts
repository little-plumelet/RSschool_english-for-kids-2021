import './styles.scss';
import Card from './card/class_card';
import animalsData from './shared/input_data/cards_data/animals-cards-data';

console.log('Hello World!');
const cardTmp = new Card(animalsData.cat);
const cardTmp2 = new Card(animalsData.cat);
document.body.appendChild(cardTmp.card);
document.body.appendChild(cardTmp2.card);
