import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/vars";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {'API-KEY': API_KEY},
});
