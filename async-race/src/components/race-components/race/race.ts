import { BaseComponent } from '../../base-component';
import { CarControls } from '../../car-components/car-controls/car-controls';
import { Car } from '../../car-components/car/car';
import { RaceHeader } from '../race-header/race-header';
import './race.css';

export class Race extends BaseComponent {
  private car: Car;

  private raceHeader: RaceHeader;

  private carControls: CarControls;

  constructor(carName: string, carColor: string, id: number) {
    super('div', ['race']);
    this.car = new Car(carName, carColor);
    this.raceHeader = new RaceHeader(carName);
    this.carControls = new CarControls();
    this.element.appendChild(this.raceHeader.element);
    this.element.appendChild(this.carControls.element);
    this.element.appendChild(this.car.element);
    this.carControls.addTemplate();
  }

  getCar(): Car {
    return this.car;
  }

  // TODO
  // Select button, Remove button, Car Name title
  // Start engine button, Stop button, Car
  // Dotted race and finish flag

  // getCar(): void {
  //   this.element.appendChild(this.car.element);
  // }
}
