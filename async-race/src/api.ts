import { CarModel } from './models/car-model';
import { GarageModel } from './models/garage-model';
import { WinnerModel } from './models/winner-model';
import { WinnersModel } from './models/winners-model';

const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const winners = `${base}/winners`;

export const getCars = async (page: number, limit = 7): Promise<GarageModel> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const items: CarModel[] = await response.json();

  return {
    items: await Promise.all(items),
    count: response.headers.get('X-Total-Count'),
  };
};

// : Promise<CarModel>
export const getCar = async (id: number): Promise<CarModel> => (await fetch(`${garage}/${id}`)).json();

export const deleteCar = async (id: string): Promise<void> => {
  const response = await fetch(`${garage}/${id}`, {
    method: 'DELETE',
  });

  const car = await response.json();

  return car;
};

const getSortOrder = (sort: string, order: string) => {
  // sort: 'id' | 'wins' | 'time'
  // order: 'ASC' | 'DESC'
  if (sort && sort) return `&_sort=${sort}&_order=${order}`;
  return '';
};

// : Promise<WinnersModel>
export const getWinner = async (id: number): Promise<WinnerModel> => (await fetch(`${winners}/${id}`)).json();

export const getWinners = async (page: number, limit = 10, sort: string, order: string): Promise<WinnersModel> => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items: WinnerModel[] = await response.json();

  return {
    items: await Promise.all(items.map(async (winner) => ({ ...winner }))),
    count: response.headers.get('X-Total-Count'),
  };
};

export const deleteWinner = async (id: string): Promise<void> => {
  const response = await fetch(`${winners}/${id}`, {
    method: 'DELETE',
  });

  const winner = await response.json();
  return winner;
};
