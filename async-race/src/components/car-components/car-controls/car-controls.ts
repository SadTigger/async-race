import { startEngine, stopEngine } from '../../../api';
import { BaseComponent } from '../../base-component';
import { EngineButton } from '../../race-components/engine-button/engine-button';
import './car-controls.css';

export class CarControls extends BaseComponent {
  private startEngineButton: EngineButton;

  private stopEngineButton: EngineButton;

  private audio: HTMLAudioElement;

  constructor() {
    super('div', ['car-controls']);
    this.startEngineButton = new EngineButton('A');
    this.stopEngineButton = new EngineButton('B');
    this.audio = new Audio('./start-engine.wav');
  }

  addTemplate(id: string): void {
    this.startEngineButton.element.addEventListener('click', async (event) => {
      // console.log(`start engine for race-${id}`);
      await stopEngine(id);
      const start = await startEngine(id);
      if (start) {
        this.audio.play();
        if (event.target) {
          const startButton = event.target as HTMLElement;
          startButton.classList.remove('active');
          this.stopEngineButton.element.classList.add('active');
        }
      }
      // console.log('distance', start.distance);
      // console.log('velocity', start.velocity);
    });
    this.stopEngineButton.element.addEventListener('click', async (event) => {
      // console.log(`stop engine for race-${id}`);
      if (event.target) {
        const stopButton = event.target as HTMLElement;
        this.audio.pause();
        this.audio.currentTime = 0;
        stopButton.classList.remove('active');
        this.startEngineButton.element.classList.add('active');
      }
      await stopEngine(id);
    });
    this.startEngineButton.setActiveState();
    this.element.appendChild(this.startEngineButton.element);
    this.element.appendChild(this.stopEngineButton.element);
  }
}
