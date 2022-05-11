import axios from 'axios';

const url = process.env.URL;

const axiosFetch = axios.create({
  baseURL: url,
});

export default axiosFetch;
