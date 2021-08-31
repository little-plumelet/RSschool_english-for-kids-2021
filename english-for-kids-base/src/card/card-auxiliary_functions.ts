import IcardData from './interface_card_data';
import defaultCardParams from './default_card_data_html';

function updateCardParams(params: IcardData): void {
  defaultCardParams.frontText.result = params.word;
  defaultCardParams.backText.result = params.translation;
  defaultCardParams.frontImage.attributes[0].push('src');
  defaultCardParams.frontImage.attributes[0].push(params.imgAddress);
}

function clearCardParams(): void {
  defaultCardParams.frontText.result = '';
  defaultCardParams.backText.result = '';
  defaultCardParams.frontImage.attributes = [[]] as string[][];
}

export {
  updateCardParams,
  clearCardParams,
};
