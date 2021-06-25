import IcardData from './interface-card-data';
import defaultCardParams from './default_card_data';

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
