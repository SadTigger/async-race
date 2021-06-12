import { BaseComponent } from '../base-component';
import { RacesContainer } from '../races-container/races-container';
import './garage-template.css';

export class GarageTemplate extends BaseComponent {
  constructor(text = 'Garage', numberOfCars: number) {
    super('div', ['garage-template']);
    this.element.innerHTML += GarageTemplate.getTitle(text, numberOfCars);
    this.element.innerHTML += GarageTemplate.getPageNumber(1);
  }

  static getTitle(text = 'Garage', numberOfCars: number): string {
    return `<span class="view-title">${text} (${numberOfCars})</span>`;
  }

  static getPageNumber(pageNumber: number): string {
    return `<span class="pagination">Page #${pageNumber}</span>`;
  }

  addRaceContainer(container: RacesContainer): void {
    this.element.appendChild(container.element);
  }
}
