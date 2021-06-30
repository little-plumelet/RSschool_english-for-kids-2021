const defaultCardParams = {
  card: {
    tegName: 'div',
    classNames: ['card'],
    attributes: [[]],
  },
  cardFront: {
    tegName: 'div',
    classNames: ['card-front'],
    attributes: [[]],
  },
  frontFooter: {
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
    classNames: ['card-front-text'],
    attributes: [[]],
    result: '',
  },
  cardBack: {
    tegName: 'div',
    classNames: ['card-back', 'hidden'],
    attributes: [[]],
  },
  backText: {
    tegName: 'p',
    classNames: ['card-back-text'],
    attributes: [[]],
    result: '',
  },
  gameMode: {
    tegName: 'span',
    classNames: [],
    attributes: [[]],
  },
};

export default defaultCardParams;
