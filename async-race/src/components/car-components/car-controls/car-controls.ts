import { startEngine, stopEngine } from '../../../api';
import { BaseComponent } from '../../base-component';
import { EngineButton } from '../../race-components/engine-button/engine-button';
import './car-controls.css';

export class CarControls extends BaseComponent {
  private startEngineButton?: EngineButton;

  private stopEngineButton?: EngineButton;

  constructor() {
    super('div', ['car-controls']);
  }

  addTemplate(id: string): void {
    this.startEngineButton = new EngineButton('A');
    this.startEngineButton.element.addEventListener('click', async () => {
      // console.log(`start engine for race-${id}`);
      const audio = new Audio('./start-engine.wav');
      await stopEngine(id);
      const start = await startEngine(id);
      if (start) {
        audio.play();
      }
      // console.log('distance', start.distance);
      // console.log('velocity', start.velocity);
    });
    this.stopEngineButton = new EngineButton('B');
    this.stopEngineButton.element.addEventListener('click', async () => {
      // console.log(`stop engine for race-${id}`);
      await stopEngine(id);
    });
    this.startEngineButton.setActiveState();
    this.element.appendChild(this.startEngineButton.element);
    this.element.appendChild(this.stopEngineButton.element);
  }
}
