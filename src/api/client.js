import axios from "axios";

const client = axios.create({
  baseURL: "https://apiyeohaengdam.ttalkak.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default client;
