import { Garage } from './pages/garage/garage';
import { Winners } from './pages/winners/winners';

export class App {
  private readonly garage: Garage;

  private readonly winners: Winners;

  constructor(private readonly rootElement: HTMLElement) {
    // TODO
    this.garage = new Garage();
    this.winners = new Winners(this.garage.getCars());
    this.rootElement.appendChild(this.garage.element);
    // this.rootElement.appendChild(this.winners.element);
  }
}
