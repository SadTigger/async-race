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

  addWinners(winners: Promise<Winner[]>[]): void {
    winners.forEach(async (winner) => (await winner).forEach(async (w) => this.element.appendChild(w.element)));
  }

  removeWinner(id: string): void {
    const parentNode = this.element;
    parentNode.removeChild(parentNode.childNodes[parseInt(id, DECIMAL_RADIX) + THE_ONE]);
  }
}
