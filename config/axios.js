import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "http://localhost:3000/",
});

export default axiosFetch;
