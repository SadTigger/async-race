import { Button } from '../button/button';
import './race-button.css';

export class RaceButton extends Button {
  constructor(text: string) {
    super(`${text}`, 'race-button');
  }
}
