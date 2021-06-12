import { BaseComponent } from '../../components/base-component';
import { Button } from '../../components/button/button';
import { Car } from '../../components/car/car';
import { HeaderMenu } from '../../components/header-menu/header-menu';
import { Navigation } from '../../components/navigation/navigation';
import { Page } from '../../components/page/page';
import { Winner } from '../../components/winner/winner';
import { WinnersContainer } from '../../components/winners-container/winners-container';
import { WinnersTemplate } from '../../components/winners-template/winners-template';

export class Winners extends BaseComponent {
  private readonly page: Page;

  private readonly headerMenu: HeaderMenu;

  private readonly navigation: Navigation;

  private readonly toGarageButton: Button;

  private readonly toWinnersButton: Button;

  private readonly winnersTemplate: WinnersTemplate;

  private readonly winnersContainer: WinnersContainer;

  private readonly winner1: Winner;

  private readonly winner2: Winner;

  private readonly winner3: Winner;

  private readonly winner4: Winner;

  constructor(cars: Car[]) {
    super();
    this.page = new Page();
    this.headerMenu = new HeaderMenu();
    this.navigation = new Navigation();
    this.winnersTemplate = new WinnersTemplate('Winners', 3);
    this.winnersContainer = new WinnersContainer();
    this.winner1 = new Winner('1', cars[0].getImage(), cars[0].getCarName(), 2, '1.9');
    this.winner2 = new Winner('2', cars[1].getImage(), cars[1].getCarName(), 1, '2.9');
    this.winner3 = new Winner('3', cars[2].getImage(), cars[2].getCarName(), 1, '3.9');
    this.winner4 = new Winner('4', cars[3].getImage(), cars[3].getCarName(), 4, '5.9');
    this.winnersContainer.addWinners([this.winner1, this.winner2, this.winner3, this.winner4]);
    this.winnersContainer.removeWinner('2');
    this.winnersTemplate.addWinnersContainer(this.winnersContainer);
    this.toGarageButton = new Button('to garage', 'navigation-button');
    this.toWinnersButton = new Button('to winners', 'navigation-button');
    this.element.appendChild(this.page.element);
    this.page.addToPage([this.navigation.element, this.winnersTemplate.element]);
    // this.headerMenu.addContents([this.navigation.element]);
    this.navigation.addButtons([this.toGarageButton, this.toWinnersButton]);
  }
}
