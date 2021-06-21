import { WinnersModel } from '../../../models/winners-model';
import { BaseComponent } from '../../base-component';
import { WinnersContainer } from '../winners-container/winners-container';
import './winners-template.css';

export class WinnersTemplate extends BaseComponent {
  constructor() {
    super('div', ['winners-template']);
    // this.element.innerHTML += WinnersTemplate.getTitle(text, numberOfCars);
    // this.element.innerHTML += WinnersTemplate.getPageNumber(1);
  }

  async addTitle(text = 'Winners', winners: Promise<WinnersModel>): Promise<void> {
    const template = (await winners).count;
    this.element.appendChild(WinnersTemplate.getViewTitleElement(text, template));
    // return `<span class="view-title">${text} (${numberOfCars})</span>`;
  }

  static getViewTitleElement(text: string, template: string | null): HTMLElement {
    const span = document.createElement('span');
    span.innerHTML = `${text} (${template})`;
    span.classList.add('view-title');
    return span;
  }

  // TODO
  // static getPageNumber(pageNumber: number): string {
  //   return `<span class="pagination">Page #${pageNumber}</span>`;
  // }

  addWinnersContainer(container: WinnersContainer): void {
    this.element.appendChild(container.element);
  }
}
