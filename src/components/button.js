import { Element } from '../utils';

export class Button extends Element {
  constructor(text, className) {
    super('button', text, {
      class: `btn ${className}`,
    });
  }

  setText(text) {
    this.element.textContent = text;
  }
}
