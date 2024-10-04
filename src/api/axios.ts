import axios from "axios";
const BASE_URL = "'https://jsonplaceholder.typicode.com/posts";

const axiosAPI = axios.create({
  baseURL: BASE_URL,
});

export default axiosAPI;
