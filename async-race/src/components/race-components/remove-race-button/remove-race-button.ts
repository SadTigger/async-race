// import { deleteCar } from '../../../api';
import { Button } from '../../button/button';
import './remove-race-button.css';

export class RemoveRaceButton extends Button {
  constructor(text: string) { // , id: string
    super(`${text}`, 'remove-race-button');
    this.element.addEventListener('click', () => {
      // console.log('remove');
      const raceContainer = document.querySelector('.races-container');
      const raceElem = document.querySelector('.race');
      if (raceContainer && raceElem) {
        raceContainer.removeChild(raceElem);
      }
    });
  }

  // private removeHandler(): void {
  //   console.log('remove car', this);
  // }
}
