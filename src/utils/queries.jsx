import { toast } from "react-toastify";
import { axiosAdminInstance, axiosPublicInstance } from "./axios";
import { API_URL } from "./CONSTANT";

// Function to handle GET requests
export const getPublicRequest = async (url, params = {}) => {
  try {
    const response = await axiosPublicInstance.get(url, { params });
    return response;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

export const getPrivateRequest = async (url, params = {}) => {
  try {
    const response = await axiosAdminInstance.get(url, { params });
    return response;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

// Function to handle POST requests
export const postPublicRequest = async (url, data) => {
  try {
    const response = await axiosPublicInstance.post(url, data);
    toast.success(response.data?.msg);
    return response;
  } catch (error) {
    console.error("POST request error:", error);
    toast.error(error.response?.data?.msg || error.response?.data?.message);
    throw error;
  }
};

export const postPrivateRequest = async (url, data) => {
  try {
    const response = await axiosAdminInstance.post(url, data);
    return response;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

// Function to handle PUT (Edit) requests
export const putRequest = async (url, data) => {
  try {
    const response = await axiosAdminInstance.put(url, data);
    return response;
  } catch (error) {
    console.error("PUT request error:", error);
    throw error;
  }
};

// Function to handle DELETE requests

export const deleteRequest = async (url) => {
  try {
    const response = await axiosAdminInstance.delete(url);
    toast.success(response.data?.message);
    return response;
  } catch (error) {
    console.error("DELETE request error:", error);
    throw error;
  }
};
