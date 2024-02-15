import { Element } from '../utils';

export class StatTable extends Element {
  constructor(taskId, stat) {
    super('div', '', {
      class: 'stat-table',
    });

    this.taskId = taskId;
    this.stat = stat;

    this.render();
  }

  render() {
    this.renderPercentTable();
  }

  renderPercentTable() {
    const headerRow = new Element('li', '', {
      class: 'stat-table__row',
    });
    const scoreHeader = new Element('span', 'Score', {
      class: 'cell stat-table__score',
    });

    const countHeader = new Element('span', 'Count', {
      class: 'cell stat-table__count',
    });

    const percentHeader = new Element('span', 'Percentage', {
      class: 'cell stat-table__percent',
    });

    headerRow.mountComponents([scoreHeader, countHeader, percentHeader]);
    this.mountComponents([headerRow]);

    this.stat.forEach((item) => {
      const row = new Element('li', '', {
        class: 'stat-table__row',
      });

      const score = new Element('span', '', {
        class: 'cell stat-table__score',
      });

      score.element.textContent = `${item.range[0]} - ${item.range[1]}`;

      const count = new Element('span', '', {
        class: 'cell stat-table__count',
      });

      count.element.textContent = `${item.count}`;

      const percent = new Element('span', '', {
        class: 'cell stat-table__percent',
      });

      percent.element.textContent = `(${item.percentage}%)`;

      row.mountComponents([score, count, percent]);
      this.mountComponents([row]);
    });
  }
}
