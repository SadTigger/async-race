import { BaseComponent } from '../../base-component';
import { CarImage } from '../car-image/car-image';
import './car.css';

export class Car extends BaseComponent {
  private carName: string;

  private readonly carImage: CarImage;

  constructor(name: string, color: string) {
    super('div', ['car']);
    this.carName = name;
    this.carImage = new CarImage('120.0pt', '64.0pt', color);
    this.getCarImageTemplate();
  }

  getCarImageTemplate(): void {
    this.element.innerHTML = this.carImage.element.outerHTML;
  }

  getImage(): string {
    return this.element.outerHTML;
  }

  getCarName(): string {
    return this.carName;
  }
}
