import axios from "axios";

const token = localStorage.getItem("@astroverso:token")
export const ApiRequests = axios.create({
  baseURL: "https://astroverso-json-api.herokuapp.com/",
  timeout: 5000,
  headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
});

