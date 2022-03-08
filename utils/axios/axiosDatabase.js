import axios from "axios";

const axiosDatabase = axios.create({
  baseURL: process.env.BASE_URL_DATABASE,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": 'XMLHttpRequest',

  },
});

export default axiosDatabase;
