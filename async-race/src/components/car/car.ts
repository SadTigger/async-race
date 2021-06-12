import { CarImage } from '../car-image/car-image';
import { BaseComponent } from '../base-component';
import './car.css';

export class Car extends BaseComponent {
  private readonly carImage: CarImage;

  constructor(color: string) {
    super('div', ['car']);
    this.carImage = new CarImage(color);
    this.getCarImage();
  }

  getCarImage(): void {
    this.element.innerHTML = this.carImage.element.outerHTML;
  }
}
