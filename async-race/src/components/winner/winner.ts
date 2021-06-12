import { BaseComponent } from '../base-component';
import './winner.css';

export class Winner extends BaseComponent {
  constructor(id: string, carImage: string, carName: string, numberOfWins: number, bestTime: string) {
    super('tr', ['winner'], [{
      name: 'id', value: `${id}`,
    }]);
    this.element.innerHTML = Winner.getTemplate(id, carImage, carName, numberOfWins, bestTime);
  }

  static getTemplate(id: string, carImage: string, carName: string, numberOfWins: number, bestTime: string): string {
    return `
    <tr>
      <th>${id}</th>
      <th>${carImage}</th>
      <th>${carName}</th>
      <th>${numberOfWins}</th>
      <th>${bestTime}</th>
    </tr>`;
  }
}
