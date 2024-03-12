import axios, { AxiosInstance } from "axios";

export let httpClient: AxiosInstance;

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_I = import.meta.env.VITE_API_I;

export function getHttpClient() {
  if (!httpClient) {
    httpClient = axios.create({
      baseURL: `${API_URL}`,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        apikey: API_KEY,
        i: API_I,
      },
    });
  }
  return httpClient;
}
