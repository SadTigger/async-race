import { getCar } from '../../../api';
import { CarModel } from '../../../models/car-model';
import { WinnersModel } from '../../../models/winners-model';
import { BaseComponent } from '../../base-component';
import { Winner } from '../winner/winner';
import './winners-container.css';

const DECIMAL_RADIX = 10;
const THE_ONE = 1;

export class WinnersContainer extends BaseComponent {
  constructor() {
    super('table', ['winners-container']);
    this.element.innerHTML = WinnersContainer.getTemplate();
  }

  static getTemplate(): string {
    return `
    <tr class="table-header">
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th>Wins</th>
      <th>Best Time (seconds)</th>
    </tr>`;
  }

  async addWinners(winners: Promise<WinnersModel>): Promise<void> {
    const chart: Winner[] = [];
    const carsImages: string[] = [];
    // winners.forEach(async (winner) => (await winner).forEach(async (w) => this.element.appendChild(w.element)));
    const winnersInChart = (await winners).count;
    const winnersItems = (await winners).items;
    const promises = [];
    for (let i = 0; i < Number(winnersInChart); i++) {
      promises.push(getCar(winnersItems[i].id));
    }
    const temp: CarModel[] = await Promise.all(promises);
    for (let i = 0; i < temp.length; i++) {
      const winnerItem = new Winner(winnersItems[i].id,
        carsImages[i], temp[i].name,
        winnersItems[i].wins,
        winnersItems[i].time);
      chart.push(winnerItem);
    }
    chart.forEach((winner) => this.element.appendChild(winner.element));
    // return chart;
  }

  removeWinner(id: string): void {
    const parentNode = this.element;
    parentNode.removeChild(parentNode.childNodes[parseInt(id, DECIMAL_RADIX) + THE_ONE]);
  }
}
