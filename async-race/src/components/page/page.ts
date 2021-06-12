import { BaseComponent } from '../base-component';
import './page.css';

export class Page extends BaseComponent {
  constructor() {
    super('div', ['page']);
  }

  addToPage(contents: HTMLElement[]): void {
    contents.forEach((content) => this.element.appendChild(content));
  }
}
