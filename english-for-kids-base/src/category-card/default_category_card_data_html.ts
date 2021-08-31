const defaultCategoryCardParams = {
  categoryContainer: {
    tegName: 'div',
    classNames: ['category-container'],
    attributes: [[]],
  },
  categoryCard: {
    tegName: 'div',
    classNames: ['card', 'category-card'],
    attributes: [[]],
  },
  categoryCardFront: {
    tegName: 'div',
    classNames: ['card-front', 'category-card-front'],
    attributes: [[]],
  },
  categoryCardfrontFooter: {
    tegName: 'div',
    classNames: ['card-footer'],
    attributes: [[]],
  },
  frontImage: {
    tegName: 'img',
    classNames: ['card-front-image'],
    attributes: [[]] as string[][],
  },
  frontText: {
    tegName: 'p',
    classNames: ['card-front-text', 'category-card-front-text'],
    attributes: [[]],
    result: '',
  },
};

export default defaultCategoryCardParams;
