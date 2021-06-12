import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import './triforce-menu.css';

export class TriforceMenu extends BaseComponent {
  private button: Button;

  constructor(type: string, name: string, buttonText: string, buttonClass: string) {
    super('div', ['triforce-menu']);
    this.button = new Button(buttonText, buttonClass);
    this.element.innerHTML += TriforceMenu.getInputTemplate(type, name);
    this.element.innerHTML += TriforceMenu.getRGBPaletteTemplate(name);
    this.element.appendChild(this.button.element);
  }

  static getInputTemplate(type: string, name: string): string {
    return `<input type=${type} name=${name}>`;
  }

  static getRGBPaletteTemplate(name: string): string {
    return `<input type="color" id="colorpicker" name=${name}>`;
  }
}
