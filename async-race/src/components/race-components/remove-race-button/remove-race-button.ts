import { deleteCar, deleteWinner } from '../../../api';
import { Button } from '../../button/button';
import './remove-race-button.css';

export class RemoveRaceButton extends Button {
  constructor(text: string, id: string) {
    super(`${text}`, 'remove-race-button');
    this.element.addEventListener('click', () => {
      const raceContainer = document.querySelector('.races-container');
      const raceId = document.querySelector(`#race-${id}`);
      const winnersContainer = document.querySelector('.winners-container');
      const winnerId = document.querySelector(`#winner-${id}`);
      if (raceContainer && raceId) {
        deleteCar(id);
        raceContainer.removeChild(raceId);
      }
      if (winnersContainer && winnerId) {
        deleteWinner(id);
        winnersContainer.removeChild(winnerId);
      }
    });
  }
}
