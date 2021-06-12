import { BaseComponent } from '../base-component';

export class Page extends BaseComponent {
  constructor() {
    super('div', ['page']);
  }

  addToPage(contents: HTMLElement[]): void {
    contents.forEach((content) => this.element.appendChild(content));
  }
}
