import { AttributesModel } from '../../models/attributes-model';
import { BaseComponent } from '../base-component';
import './button.css';

export class Button extends BaseComponent {
  constructor(private text: string, private className: string, params: AttributesModel[] = []) {
    super('button', ['button', `${className}`], params);
    this.element.innerHTML = Button.addButtonText(text);
  }

  static addButtonText(text: string): string {
    return `${text}`;
  }
}
