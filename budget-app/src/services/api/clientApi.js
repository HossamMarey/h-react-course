import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN } from "../constant";


const clientApi = axios.create({
  // baseURL: "http://localhost:5000/v1/api",
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  }
})

clientApi.interceptors.request.use(async (config) => {
  const token = Cookies.get(TOKEN)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})


export default clientApi