import { BaseComponent } from '../../base-component';
import './header-menu.css';

export class HeaderMenu extends BaseComponent {
  constructor() {
    super('div', ['header-menu']);
  }

  addContents(contents: HTMLElement[]): void {
    contents.forEach((content) => this.element.appendChild(content));
  }
}
