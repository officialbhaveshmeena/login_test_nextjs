import axios from "axios";

const instance = axios.create({
  baseURL: "https://login-test-nyfh.onrender.com/api/auth",
});

export default instance;
