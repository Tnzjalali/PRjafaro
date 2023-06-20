import axios from "axios";

const instance = axios.create({
  baseURL: "http://urpi.mynewfarm.net",
  headers: {
    "Access-Control-Allow-Origin": true,
    "Access-Control-Allow-Credentials": true,
  },
});
export default instance;