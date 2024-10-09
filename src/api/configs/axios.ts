import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosAPI = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
axios.defaults.headers.patch["Content-Type"] =
  "application/json; charset=UTF-8";

export default axiosAPI;
