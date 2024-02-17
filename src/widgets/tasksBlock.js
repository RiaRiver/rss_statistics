import { store } from '../store';
import { Element } from '../utils';
import { Task } from './task';

export class TasksBlock extends Element {
  constructor(type) {
    super('div', '', {
      class: 'tasks',
    });

    this.type = type;

    this.render();
    this.renderTask(this.tasks[0].id);
  }

  render() {
    const tasksWrapper = new Element('div', '', { class: 'tasks__wrapper ' });
    const tasksTitle = new Element('h2', `${this.type}`, { class: 'tasks__title ' });
    const tasksList = new Element('ul', '', { class: 'tasks__list ' });

    this.taskContainer = new Element('div', '', {
      class: 'task__container',
    });

    const tasks = this.getTaskList();
    this.tasks = tasks.map((task) => {
      const taskItem = new Element('li', `${task.name}`, {
        class: 'tasks__item',
        'data-task-id': task.id,
      });
      taskItem.id = task.id;
      taskItem.setListeners([{
        event: 'click',
        handler: () => {
          this.renderTask(taskItem.id);
        },
      }]);

      return taskItem;
    });

    tasksList.mountComponents(this.tasks);
    tasksWrapper.mountComponents([tasksTitle, tasksList]);
    this.mountComponents([tasksWrapper, this.taskContainer]);
  }

  getTaskList() {
    switch (this.type) {
      case 'Test': {
        return store
          .getState('tasks')
          .filter((task) => task.type === 'selfeducation');
      }

      case 'Crosscheck': {
        return store
          .getState('tasks')
          .filter((task) => task.checker === 'crossCheck');
      }

      default: {
        return store
          .getState('tasks')
          .filter((task) => task.type !== 'selfeducation' && task.checker !== 'crossCheck');
      }
    }
  }

  renderTask(taskId) {
    this.updateTasksListView(taskId);
    this.taskElem = new Task(taskId);

    this.taskContainer.mountComponents([this.taskElem], 'replaceChildren');
  }

  updateTasksListView(activeTask) {
    this.tasks.forEach((task) => {
      if (task.id === activeTask) {
        task.setProperties({ 'data-active': '' });
      } else {
        task.removeProperties(['data-active']);
      }
    });
  }
}
