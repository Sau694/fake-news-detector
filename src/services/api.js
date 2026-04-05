import axios from "axios";

const API = axios.create({
  baseURL: "https://fake-news-backend.onrender.com/predict",
});

export const checkNews = (text) => {
  return API.post("/predict", { text });
};
