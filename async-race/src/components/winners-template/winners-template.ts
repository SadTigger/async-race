import { BaseComponent } from '../base-component';
import { WinnersContainer } from '../winners-container/winners-container';
import './winners-template.css';

export class WinnersTemplate extends BaseComponent {
  constructor(text = 'Winners', numberOfCars: number) {
    super('div', ['winners-template']);
    this.element.innerHTML += WinnersTemplate.getTitle(text, numberOfCars);
    this.element.innerHTML += WinnersTemplate.getPageNumber(1);
  }

  static getTitle(text = 'Winners', numberOfCars: number): string {
    return `<span class="view-title">${text} (${numberOfCars})</span>`;
  }

  static getPageNumber(pageNumber: number): string {
    return `<span class="pagination">Page #${pageNumber}</span>`;
  }

  addWinnersContainer(container: WinnersContainer): void {
    this.element.appendChild(container.element);
  }
}
