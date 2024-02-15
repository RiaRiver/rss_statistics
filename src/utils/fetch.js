import axios from 'axios';

const options = {
  url: 'https://rss-stats-app.ahapxor.xyz/rss_stat_full',
  method: 'get',
  // cache: 'default',
};

const getData = async () => (await axios(options)).data;

export default getData;
