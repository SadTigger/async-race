import { VehicleModel } from './models/vehicle-model';

const RGB_TEMPLATE = '01234567890ABCDEF';

export const randomColor = (): string => {
  const red = RGB_TEMPLATE.split('').sort(() => Math.random() - 0.5);
  const green = RGB_TEMPLATE.split('').sort(() => Math.random() - 0.5);
  const blue = RGB_TEMPLATE.split('').sort(() => Math.random() - 0.5);

  const color = red.slice(0, 2).join('') + green.slice(0, 2).join('') + blue.slice(0, 2).join('');
  return `#${color}`;
};

const VEHICLES: VehicleModel[] = [
  { brand: 'Audi', model: ['A6', 'A8', 'QQ', 'QS'] },
  { brand: 'Opel', model: ['Omega', 'Zaphira', 'Astra', 'Record'] },
  { brand: 'LADA', model: ['2101', '2102', '2103', '2107'] },
  { brand: 'Volkswagen', model: ['Golf', 'Passat', 'Santana', 'Jetta', 'Polo', 'Tiguan'] },
  { brand: 'Toyota', model: ['Corolla', 'Camry', 'Prius'] },
  { brand: 'Cherry', model: ['Tiggo 3', 'Tiggo 5', 'Tiggo 7'] },
  { brand: 'Tesla', model: ['Truck', 'Model S', 'Model M'] },
  { brand: 'Volvo', model: ['XC40', 'XC90 II', 'XC60 II', 'GTZ'] },
  { brand: 'Honda', model: ['Civic', 'Brio', 'Accord', 'Elysion'] },
];

export const randomCarName = (): string => {
  const number = Math.ceil(Math.random() * (VEHICLES.length - 1));
  const carName = `${VEHICLES[number].brand} ${VEHICLES[number].model.sort(() => Math.random() - 0.5).slice(0, 1)}`;
  return carName;
};
