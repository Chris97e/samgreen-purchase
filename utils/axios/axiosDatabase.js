import axios from "axios";

const axiosDatabase = axios.create({
  baseURL: process.env.BASE_URL_DATABASE,
  headers: {},
});

export default axiosDatabase;
