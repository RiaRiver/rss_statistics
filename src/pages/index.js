import { Element } from '../utils';
import { TasksBlock } from '../widgets/tasksBlock';

export class MainPage extends Element {
  constructor() {
    super('main', '', { class: 'main' });

    this.render();
  }

  render() {
    const title = new Element('h1', 'RSS Statistics FE2023Q3', {});

    const tasksTest = new TasksBlock('Test');
    const tasksCrosscheck = new TasksBlock('Crosscheck');
    const tasksOther = new TasksBlock('Other');

    this.mountComponents([title, tasksCrosscheck, tasksTest, tasksOther]);
  }
}
