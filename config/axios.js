import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';
const { DEV_URL, PROD_URL } = process.env;

const axiosFetch = axios.create({
  baseURL: `${dev ? DEV_URL : PROD_URL}/`,
});

export default axiosFetch;
