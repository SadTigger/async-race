import { TriforceMenu } from '../triforce-menu/triforce-menu';
import { BaseComponent } from '../../base-component';
import './garage-controls.css';

export class GarageControls extends BaseComponent {
  constructor() {
    super('div', ['garage-controls']);
  }

  addTriforces(triforces: TriforceMenu[]): void {
    triforces.forEach((triforce) => this.element.appendChild(triforce.element));
  }
}
