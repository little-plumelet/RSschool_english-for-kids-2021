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
    classNames: ['card-back'],
    attributes: [[]],
  },
  backText: {
    tegName: 'p',
    classNames: ['card-back-text'],
    attributes: [[]],
    result: '',
  },
};

export default defaultCardParams;
