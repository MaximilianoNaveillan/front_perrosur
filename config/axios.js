import axios from 'axios';

const axiosFetch = axios.create({
  baseURL: process.env.URL,
});

export default axiosFetch;
