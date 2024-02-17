import { Button, StatTable } from '../components';
import { Chart } from '../components/chart';
import { store } from '../store';
import { Element } from '../utils';
import { getTaskStat } from '../utils/stat';

export class Task extends Element {
  constructor(taskId) {
    super('div', '', {
      class: 'task',
    });

    this.taskId = taskId;

    this.render();
  }

  render() {
    this.renderTitle();

    const {
      scoreStatPercent: stat = {},
      scoreStatDozens: statDozen = {},
    } = getTaskStat(this.taskId);

    this.chart = new Chart(this.taskId, stat);
    this.table = new StatTable(this.taskId, stat);
    this.tableDozen = new StatTable(this.taskId, statDozen);

    this.table.hide();
    this.tableDozen.hide();

    this.mountComponents([this.chart, this.table, this.tableDozen]);
    this.chart.view();
  }

  renderTitle() {
    this.title = new Element('h2', '', { class: 'task__title' });
    this.name = new Element('span', '', { class: 'task__name' });
    this.total = new Element('span', '', { class: 'task__total' });
    this.active = new Element('span', '', { class: 'task__active' });

    const { name } = store.getState('tasks').find((task) => task.id === this.taskId);
    const { passCountTotal, passCountActive } = getTaskStat(this.taskId);

    const { total, totalActive } = store.getState();
    const percentTotal = ((passCountTotal / total) * 100).toFixed(2);
    const percentActive = ((passCountActive / totalActive) * 100).toFixed(2);

    this.name.element.textContent = name;
    this.total.element.textContent = `Total: (${passCountTotal} / ${total}) (${percentTotal}%)`;
    this.active.element.textContent = `Active: (${passCountActive} / ${totalActive}) (${percentActive}%)`;
    this.title.mountComponents([this.name, this.total, this.active]);

    const button = new Button('Show table', 'task__btn');
    button.setListeners([
      {
        event: 'click',
        handler: () => {
          this.table.toggleView();
          this.tableDozen.toggleView();
          this.chart.toggleView();
          button.setText(button.element.textContent === 'Show table' ? 'Show chart' : 'Show table');
        },
      },
    ]);

    this.mountComponents([this.title]);
    this.mountComponents([button]);
  }
}
