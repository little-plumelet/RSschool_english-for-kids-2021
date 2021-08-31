import IcategoryCardData from './interface_category_card_data';
import defaultCategoryCardParams from './default_category_card_data_html';

function updateCategoryCardParams(params: IcategoryCardData): void {
  defaultCategoryCardParams.frontText.result = params.title;
  defaultCategoryCardParams.frontImage.attributes[0].push('src');
  defaultCategoryCardParams.frontImage.attributes[0].push(params.imgAddress);
}

function clearCategoryCardParams(): void {
  defaultCategoryCardParams.frontText.result = '';
  defaultCategoryCardParams.frontImage.attributes = [[]] as string[][];
}

export {
  updateCategoryCardParams,
  clearCategoryCardParams,
};
