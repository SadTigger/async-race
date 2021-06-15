import { CarModel } from './models/car-model';
import { GarageModel } from './models/garage-model';
import { EngineModel } from './models/engine-model';
import { WinnerModel } from './models/winner-model';
import { WinnersModel } from './models/winners-model';
import { DriveModel } from './models/drive-model';

const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const winners = `${base}/winners`;
const engine = `${base}/engine`;

export const getCars = async (page: number, limit = 7): Promise<GarageModel> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const items: CarModel[] = await response.json();

  return {
    items: await Promise.all(items),
    count: response.headers.get('X-Total-Count'),
  };
};

// : Promise<CarModel>
export const getCar = async (id: number): Promise<CarModel> => (
  await fetch(`${garage}/${id}`)
).json();

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
export const getWinner = async (id: number): Promise<WinnerModel> => (
  await fetch(`${winners}/${id}`)
).json();

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

export const startEngine = async (id: string): Promise<EngineModel> => (
  await fetch(`${engine}?id=${id}&status=started`)
).json();

export const stopEngine = async (id: string): Promise<EngineModel> => (
  await fetch(`${engine}?id=${id}&status=stopped`)
).json();

export const drive = async (id: string): Promise<DriveModel> => {
  const response = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
};
