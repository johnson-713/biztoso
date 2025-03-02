import axios from "axios";

const API_BASE_URL = "https://67c48a7ac4649b9551b3ea9f.mockapi.io/biztoso/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
