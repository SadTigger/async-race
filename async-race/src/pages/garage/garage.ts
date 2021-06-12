import { RacesContainer } from '../../components/races-container/races-container';
import { BaseComponent } from '../../components/base-component';
import { Button } from '../../components/button/button';
import { GarageControls } from '../../components/garage-controls/garage-controls';
import { HeaderMenu } from '../../components/header-menu/header-menu';
import { Navigation } from '../../components/navigation/navigation';
import { Page } from '../../components/page/page';
import { RaceControls } from '../../components/race-controls/race-controls';
import { Race } from '../../components/race/race';
import { TriforceMenu } from '../../components/triforce-menu/triforce-menu';
import { GarageTemplate } from '../../components/garage-template/garage-template';

export class Garage extends BaseComponent {
  private readonly page: Page;

  private readonly headerMenu: HeaderMenu;

  private readonly navigation: Navigation;

  private readonly garageControls: GarageControls;

  private readonly raceControls: RaceControls;

  private readonly toGarageButton: Button;

  private readonly toWinnersButton: Button;

  private readonly raceButton: Button;

  private readonly resetButton: Button;

  private readonly generateCarsButton: Button;

  private readonly createCar: TriforceMenu;

  private readonly updateCar: TriforceMenu;

  private readonly garageTemplate: GarageTemplate;

  private readonly raceContainer: RacesContainer;

  private readonly race1: Race;

  private readonly race2: Race;

  private readonly race4: Race;

  private readonly race3: Race;

  constructor() {
    super();
    this.page = new Page();
    this.headerMenu = new HeaderMenu();
    this.navigation = new Navigation();
    this.garageControls = new GarageControls();
    this.raceControls = new RaceControls();
    this.garageTemplate = new GarageTemplate('Garage', 4);
    this.raceContainer = new RacesContainer();
    this.garageTemplate.addRaceContainer(this.raceContainer);
    this.race1 = new Race('Tesla', '#3f3f3f', 1);
    this.race2 = new Race('Opel Astra', '#fffeee', 2);
    this.race3 = new Race('Ford Mondeo', '#e343e4', 3);
    this.race4 = new Race('Iz', '#3a5dc3', 4);
    this.raceContainer.addRaces([this.race1, this.race2, this.race3, this.race4]);
    this.toGarageButton = new Button('to garage', 'navigation-button');
    this.toWinnersButton = new Button('to winners', 'navigation-button');
    this.raceButton = new Button('race', 'race-control-button');
    this.resetButton = new Button('reset', 'race-control-button');
    this.generateCarsButton = new Button('generate cars', 'generate-button');
    this.element.appendChild(this.page.element);
    this.page.addToPage([this.headerMenu.element, this.garageTemplate.element]);
    this.headerMenu.addContents([this.navigation.element, this.garageControls.element, this.raceControls.element]);
    this.navigation.addButtons([this.toGarageButton, this.toWinnersButton]);
    this.createCar = new TriforceMenu('text', 'create-car', 'create', 'triforce-button');
    this.updateCar = new TriforceMenu('text', 'update-car', 'update', 'triforce-button');
    this.garageControls.addTriforces([this.createCar, this.updateCar]);
    this.raceControls.addButtons([this.raceButton, this.resetButton, this.generateCarsButton]);
  }
}
