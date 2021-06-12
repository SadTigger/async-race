import { AttributesModel } from '../models/attributes-model';

export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = [], attributes: AttributesModel[] = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    if (attributes) {
      attributes.forEach((attribute) => this.element.setAttribute(attribute.name, attribute.value));
    }
  }
}
