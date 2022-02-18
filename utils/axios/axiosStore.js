import axios from "axios";

const axiosStore = axios.create({
  baseURL: process.env.BASE_URL_STORE,
  headers: {
    "content-type": "application/json",
  },
  auth: {
    username: process.env.CLIENT_KEY,
    password: process.env.CLIENT_SECRET,
  },
});

export default axiosStore;
