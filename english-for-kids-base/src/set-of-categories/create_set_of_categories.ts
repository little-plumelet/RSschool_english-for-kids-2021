import CategoryCard from '../category-card/class_category_card';
import IcategoryCardData from '../category-card/interface_category_card_data';
import CATEGORY_CONSTANTS from '../shared/constants/category_constants';

const { categories } = CATEGORY_CONSTANTS;

export default function createsetOfCategories(setOfCategories: CategoryCard[]): void {
  const cardCategoryData = {} as IcategoryCardData;

  categories.forEach((element) => {
    console.log('elems =', element);
    cardCategoryData.categoryName = element.categoryName;
    cardCategoryData.title = element.title;
    cardCategoryData.imgAddress = element.imgAddress;
    const categoryCard = new CategoryCard(cardCategoryData);
    setOfCategories.push(categoryCard);
  });
}
