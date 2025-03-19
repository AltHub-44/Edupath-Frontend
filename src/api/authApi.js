import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signupUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, userData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};