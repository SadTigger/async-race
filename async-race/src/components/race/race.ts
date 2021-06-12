import { BaseComponent } from '../base-component';
import { CarControls } from '../car-controls/car-controls';
import { Car } from '../car/car';
import { RaceHeader } from '../race-header/race-header';
import './race.css';

export class Race extends BaseComponent {
  private car: Car;

  private raceHeader: RaceHeader;

  private carControls: CarControls;

  constructor(carName: string, carColor: string, id: number) {
    super('div', ['race']);
    this.car = new Car(carColor);
    this.raceHeader = new RaceHeader();
    this.carControls = new CarControls();
    this.element.appendChild(this.raceHeader.element);
    this.element.appendChild(this.carControls.element);
    this.element.appendChild(this.car.element);
    this.raceHeader.addTemplate(carName);
    this.carControls.addTemplate();
  }

  // TODO
  // Select button, Remove button, Car Name title
  // Start engine button, Stop button, Car
  // Dotted race and finish flag

  // getCar(): void {
  //   this.element.appendChild(this.car.element);
  // }
}
