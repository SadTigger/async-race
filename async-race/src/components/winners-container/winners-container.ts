import { BaseComponent } from '../base-component';
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
    // id: number, carId: number, carName: string, numberOfWins: number, bestTime: string
    return `
    <tr class="table-header">
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th>Wins</th>
      <th>Best Time (seconds)</th>
    </tr>`;
  }

  addWinners(winners: Winner[]): void {
    winners.forEach((winner) => this.element.appendChild(winner.element));
  }

  removeWinner(id: string): void {
    // console.log('this.element', this.element);
    // console.log('this.element.children', this.element.children);
    const parentNode = this.element;
    parentNode.removeChild(parentNode.childNodes[parseInt(id, DECIMAL_RADIX) + THE_ONE]);
  }
}
