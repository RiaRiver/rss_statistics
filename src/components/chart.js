import CanvasJS from '@canvasjs/charts';
import { Element } from '../utils';

CanvasJS.addColorSet(
  'colorSet',
  [// colorSet Array
    '#393b38', '#ed8796', '#f5a97f', '#eed49f', '#a6da95', '#7de4db', '#7dc4e4', '#a0a1f6', '#c6a0f6', '#f6a0f6'],
);
export class Chart extends Element {
  constructor(taskId, chartData) {
    super('div', '', { class: 'chart', id: `chart-${taskId}`, hidden: true });

    this.taskId = taskId;
    this.chartData = chartData;

    document.body.append(this.element);
    this.render();
  }

  render() {
    const dataPoints = this.chartData.map((obj) => ({ label: `${obj.range[0]}-${obj.range[1]}`, y: obj.count }));

    const chart = new CanvasJS.Chart(`chart-${this.taskId}`, {
      colorSet: 'colorSet',
      backgroundColor: 'transparent',
      data: [{
        type: 'doughnut',
        startAngle: 272,
        radius: '70%',
        innerRadius: '40%',
        indexLabelFontSize: 16,
        indexLabel: '{label}: {y} (#percent%)',
        dataPoints,
      }],
    });

    chart.render();
  }
}
