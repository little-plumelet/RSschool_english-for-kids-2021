import './styles.scss';
import header from './header/create_header';
// import Card from './card/class_card';
// import { categoriesData } from './shared/input_data/cards_data/cards-data';
// import SetOfCards from './set-of-cards/class_set_of_cards';
// import router from './router/create_router';
import IcategoryCardData from './category-card/interface_category_card_data';
import CategoryCard from './category-card/class_category_card';
import CARD_CONSTANTS from './shared/constants/card-constants';
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
const { categories } = CARD_CONSTANTS;
document.body.appendChild(header.header);

// function createNavigationList() {
//  // const navListOfCategories = new NavListOfCategories(categories);
//   // header.burgerMenuButton.container.appendChild(navListOfCategories.ul);
// }

// перенести функцию в подходящий файл и папку!!!!!!
function createAllCategories(): void {
  const cardCategoryData = {} as IcategoryCardData;
  console.log('categories =', categories);
  // createNavigationList();
  categories.forEach((element) => {
    console.log('elems =', element);
    cardCategoryData.categoryName = element.categoryName;
    cardCategoryData.title = element.title;
    cardCategoryData.imgAddress = element.imgAddress;
    const categoryCard = new CategoryCard(cardCategoryData);
    document.body.appendChild(categoryCard.categoryContainer);
  });
}

createAllCategories();
