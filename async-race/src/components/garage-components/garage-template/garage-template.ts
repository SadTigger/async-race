import { GarageModel } from '../../../models/garage-model';
import { BaseComponent } from '../../base-component';
import { RacesContainer } from '../../race-components/races-container/races-container';
import './garage-template.css';

export class GarageTemplate extends BaseComponent {
  constructor() {
    super('div', ['garage-template']);
    // this.element.innerHTML += GarageTemplate.getPageNumber(1);
  }

  async addTitle(text = 'Garage', garage: Promise<GarageModel>): Promise<void> {
    const template = (await garage).count;
    this.element.appendChild(GarageTemplate.getViewTitleElement(text, template));
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

  addRaceContainer(container: RacesContainer): void {
    this.element.appendChild(container.element);
  }
}
