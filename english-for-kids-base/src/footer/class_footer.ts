import createDomElement from '../shared/shared_functions/create-dom-element';

const defaultFooterParams = {
  footer: {
    tegName: 'footer',
    classNames: ['footer'],
    attributes: [[]],
  },
  wrapper: {
    tegName: 'div',
    classNames: ['wrapper'],
    attributes: [[]],
  },
  signContainer: {
    tegName: 'div',
    classNames: ['sign-container'],
    attributes: [[]],
  },
  authorReference: {
    tegName: 'a',
    classNames: ['author-reference'],
    attributes: [['href', 'https://github.com/little-plumelet']],
    result: 'little-plumelet. GitHub',
  },
  year: {
    tegName: 'p',
    classNames: ['year'],
    attributes: [[]],
    result: '2021',
  },
  logoContainer: {
    tegName: 'div',
    classNames: ['logo-container'],
    attributes: [[]],
  },
  logo: {
    tegName: 'img',
    classNames: ['logo'],
    attributes: [['src', 'https://rs.school/images/rs_school_js.svg'], ['alt', 'logo']],
  },
  courseReference: {
    tegName: 'a',
    classNames: ['course-reference'],
    attributes: [['href', 'https://rs.school/js/']],
  },
};
export default class Footer {
  footer: HTMLElement;

  wrapper: HTMLElement;

  authorContainer: HTMLElement;

  authorReference: HTMLElement;

  yearOfCreation: HTMLElement;

  logoContainer: HTMLElement;

  logo: HTMLElement;

  courseReference: HTMLElement;

  constructor() {
    this.footer = createDomElement(defaultFooterParams.footer);
    this.wrapper = createDomElement(defaultFooterParams.wrapper);
    this.authorContainer = createDomElement(defaultFooterParams.signContainer);
    this.authorReference = createDomElement(defaultFooterParams.authorReference);
    this.yearOfCreation = createDomElement(defaultFooterParams.year);
    this.logoContainer = createDomElement(defaultFooterParams.logoContainer);
    this.logo = createDomElement(defaultFooterParams.logo);
    this.courseReference = createDomElement(defaultFooterParams.courseReference);

    this.footer.appendChild(this.wrapper);
    this.wrapper.appendChild(this.authorContainer);
    this.wrapper.appendChild(this.logoContainer);
    this.authorContainer.appendChild(this.authorReference);
    this.authorContainer.appendChild(this.yearOfCreation);
    this.logoContainer.appendChild(this.courseReference);
    this.courseReference.appendChild(this.logo);
  }
}
