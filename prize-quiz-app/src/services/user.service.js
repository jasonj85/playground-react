import axios from "../axios";
import authHeader from "./auth-header";

const getPublicContent = () => {
  return axios.get("users/all");
};

const getUserBoard = () => {
  return axios.get("users/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get("users/moderator", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get("users/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};