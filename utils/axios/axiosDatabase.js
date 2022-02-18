import axios from "axios";

const axiosDatabase = axios.create({
  baseURL: process.env.BASE_URL_DATABASE,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin":"*",
  },
});

export default axiosDatabase;
