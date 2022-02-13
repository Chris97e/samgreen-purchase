import axios from "axios";

const axiosWoocomerce = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  auth: {
    username: process.env.CLIENT_KEY,
    password: process.env.CLIENT_SECRET,
  },
});

export default axiosWoocomerce;
