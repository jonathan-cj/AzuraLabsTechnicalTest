import axios from "axios";

const AxiosClient = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:5000" : process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

export default AxiosClient;
