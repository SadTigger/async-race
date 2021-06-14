import { GarageModel } from '../../models/garage-model';
import { CarModel } from '../../models/car-model';
import { BaseComponent } from '../../components/base-component';
import { Button } from '../../components/button/button';
import { Page } from '../../components/page/page';
import { TriforceMenu } from '../../components/garage-components/triforce-menu/triforce-menu';
import { GarageTemplate } from '../../components/garage-components/garage-template/garage-template';
import { Car } from '../../components/car-components/car/car';
import { GarageControls } from '../../components/garage-components/garage-controls/garage-controls';
import { RaceControls } from '../../components/race-components/race-controls/race-controls';
import { RacesContainer } from '../../components/race-components/races-container/races-container';
import { Race } from '../../components/race-components/race/race';
import { HeaderMenu } from '../../components/header-components/header-menu/header-menu';
import { Navigation } from '../../components/header-components/navigation/navigation';
import { getCars } from '../../api';

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

  private readonly races: Promise<Race[]>[] = [];

  private car!: CarModel;

  allCars: GarageModel | undefined;

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
    const garage = this.getCarToRace();
    this.races.push(garage);
    this.raceContainer.addRaces(this.races);
    this.toGarageButton = new Button('to garage', 'navigation-button');
    this.toWinnersButton = new Button('to winners', 'navigation-button');
    this.raceButton = new Button('race', 'race-control-button');
    // this.raceButton.element.addEventListener('click', () => console.log('click'));
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

  async getCarsToWinners(): Promise<Car[]> {
    const cars: Car[] = [];
    (await this.races[0]).forEach(async (race) => cars.push(race.getCar()));
    return cars;
  }

  async getCarToRace(): Promise<Race[]> { //
    const hangar: Race[] = [];
    const garage = this.getAllCars();
    const promises: CarModel[] = [];
    (await garage).items.forEach((car) => promises.push(car));
    const temp: CarModel[] = await Promise.all(promises);
    temp.forEach((item) => {
      const raceItem = new Race(item);
      hangar.push(raceItem);
    });
    return hangar;
  }

  async getAllCars(): Promise<GarageModel> {
    this.allCars = await getCars(1);
    return this.allCars;
  }
}
