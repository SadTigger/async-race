import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import { Navigation } from '../header-components/navigation/navigation';

export class NavigationMenu extends BaseComponent {
  private readonly navigation: Navigation;

  private readonly toGarageButton: Button;

  private readonly toWinnersButton: Button;

  constructor() {
    super('div', ['navigation-menu']);
    this.navigation = new Navigation();
    this.element.appendChild(this.navigation.element);
    this.toGarageButton = new Button('to garage', 'navigation-button');
    this.toWinnersButton = new Button('to winners', 'navigation-button');
    this.navigation.addButtons([this.toGarageButton, this.toWinnersButton]);
    this.toGarageButton.element.addEventListener('click', () => {
      const winnersView: HTMLElement | null = document.querySelector('.winners-view');
      const garageView: HTMLElement | null = document.querySelector('.garage-view');
      if (garageView && winnersView) {
        garageView.style.display = 'block';
        winnersView.style.display = 'none';
      }
    });

    this.toWinnersButton.element.addEventListener('click', () => {
      const winnersView: HTMLElement | null = document.querySelector('.winners-view');
      const garageView: HTMLElement | null = document.querySelector('.garage-view');
      if (garageView && winnersView) {
        winnersView.style.display = 'block';
        garageView.style.display = 'none';
      }
    });
  }
}
