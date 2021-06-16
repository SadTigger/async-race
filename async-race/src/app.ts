import { NavigationMenu } from './components/navigation-menu/navigation-menu';
import { Garage } from './pages/garage/garage';
import { Winners } from './pages/winners/winners';

export class App {
  private readonly navigation: NavigationMenu;

  private readonly garage: Garage;

  private readonly winners: Winners;

  constructor(private readonly rootElement: HTMLElement) {
    this.navigation = new NavigationMenu();
    this.garage = new Garage();
    this.winners = new Winners(this.garage.getCarsToWinners());
  }

  run(): void {
    this.rootElement.appendChild(this.navigation.element);
    this.rootElement.appendChild(this.garage.element);
    this.rootElement.appendChild(this.winners.element);
  }
}
