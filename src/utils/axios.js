import axios from "axios";
import { API_URL } from "./CONSTANT";
import { useContext } from "react";
import { MyProvider } from "../content/Auth2";


export const axiosPublicInstance = axios.create({
  baseURL: API_URL, // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Example: Add token if needed
}, 
}); 

export const axiosAdminInstance = axios.create({
    baseURL: API_URL, // Replace with your API base URL
    timeout: 10000, // Request timeout in milliseconds
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Example: Add token if needed
    },
  });