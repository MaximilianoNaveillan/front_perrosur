import axios from 'axios';

const axiosFetch = axios.create({
  baseURL: 'https://perrosur-page.vercel.app/',
});

export default axiosFetch;
