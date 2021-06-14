import { getCar, getWinners } from '../../api';
import { BaseComponent } from '../../components/base-component';
import { Car } from '../../components/car-components/car/car';
import { Page } from '../../components/page/page';
import { Winner } from '../../components/winners-components/winner/winner';
import { WinnersContainer } from '../../components/winners-components/winners-container/winners-container';
import { WinnersTemplate } from '../../components/winners-components/winners-template/winners-template';
import { CarModel } from '../../models/car-model';
import { WinnersModel } from '../../models/winners-model';

export class Winners extends BaseComponent {
  private readonly page: Page;

  private readonly winnersTemplate: WinnersTemplate;

  private readonly winnersContainer: WinnersContainer;

  private readonly winners: Promise<Winner[]>[] = [];

  winnersList: WinnersModel | undefined;

  constructor(cars: Promise<Car[]>) {
    super();
    this.page = new Page();
    this.winnersTemplate = new WinnersTemplate('Winners', 3);
    this.winnersContainer = new WinnersContainer();
    const chart = this.getWinnersToChart(cars);
    this.winners.push(chart);
    this.winnersContainer.addWinners(this.winners);
    this.winnersTemplate.addWinnersContainer(this.winnersContainer);
    this.element.appendChild(this.page.element);
    this.page.addToPage([this.winnersTemplate.element]);
  }

  async getWinnersToChart(cars: Promise<Car[]>): Promise<Winner[]> {
    const chart: Winner[] = [];
    const carsImages: string[] = [];
    (await cars).forEach((car) => carsImages.push(car.getImage()));
    const view = await this.getAllWinners();
    const winnersInChart = view.count;
    const promises = [];
    for (let i = 0; i < Number(winnersInChart); i++) {
      promises.push(getCar(view.items[i].id));
    }
    const temp: CarModel[] = await Promise.all(promises);
    for (let i = 0; i < temp.length; i++) {
      const winnerItem = new Winner(view.items[i].id,
        carsImages[i], temp[i].name,
        view.items[i].wins,
        view.items[i].time);
      chart.push(winnerItem);
    }
    return chart;
  }

  async getAllWinners(): Promise<WinnersModel> {
    this.winnersList = await getWinners(1, 10, 'id', 'ASC');
    return this.winnersList;
  }

  removeWinner(id: string): void {
    this.winnersContainer.removeWinner(id);
  }
}
