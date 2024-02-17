import { MainPage } from './src/pages';
import './src/sass/style.scss';
import getData from './src/utils/fetch';

import { store } from './src/store';

(async () => {
  const app = document.getElementById('app');

  const data = await getData();
  store.setState('total', data.score.length);
  store.updateState(data);
  store.setState('totalActive', data.score.filter((student) => student.active).length);

  const main = new MainPage().getElement();

  app.append(main);
})();
