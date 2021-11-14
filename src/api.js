import axios from "axios";

let url;
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:3000";
}

if (process.env.NODE_ENV === "production") {
  url = "https://pini-backend-playground.herokuapp.com/";
}
const api = axios.create({
  baseURL: url,
});
export default api;
