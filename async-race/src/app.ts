import { Garage } from './pages/garage/garage';

export class App {
  private readonly garage: Garage;

  constructor(private readonly rootElement: HTMLElement) {
    // TODO
    this.garage = new Garage();
    // this.winners = new Winners();
    this.rootElement.appendChild(this.garage.element);
    // this.rootElement.appendChild(this.winners.element);
  }
}
