import { BaseComponent } from '../base-component';
import './button.css';

export class Button extends BaseComponent {
  constructor(private text: string, private className: string) {
    super('button', ['button', `${className}`]);
    this.element.innerHTML = Button.addButtonText(text);
  }

  static addButtonText(text: string): string {
    return `${text}`;
  }
}
