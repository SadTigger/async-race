import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import './triforce-menu.css';

export class TriforceMenu extends BaseComponent {
  private button: Button;

  constructor(type: string, name: string, buttonText: string, buttonClass: string) {
    super('form', ['triforce-menu']);
    this.button = new Button(buttonText, buttonClass, [{ name: 'type', value: 'submit' }]);
    this.element.innerHTML += TriforceMenu.getInputTemplate(type, name, buttonText);
    this.element.innerHTML += TriforceMenu.getRGBPaletteTemplate(buttonText);
    this.element.appendChild(this.button.element);
  }

  getButton(): Button {
    return this.button;
  }

  static getInputTemplate(type: string, name: string, id: string): string {
    return `<input type=${type} name=${name} id=${id} required>`;
  }

  static getRGBPaletteTemplate(name: string): string {
    return `<input type="color" value="#ffffff" id="colorpicker-${name}" name=${name}>`;
  }
}
