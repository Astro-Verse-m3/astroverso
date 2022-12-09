import axios from "axios";

const token = localStorage.getItem("@astroverso:token");
export const ApiRequests = axios.create({
  baseURL: "hhttps://luminous-mandazi-ca6c5c.netlify.app/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
