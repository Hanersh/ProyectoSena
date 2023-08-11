import axios from "./axios";

export const loginRequest = (user) => axios.post(`/userLogin`, user);

export const logoutRequest = (user) => axios.post(`/userLogout`, user);

export const verityTokenRequest = () => axios.get("/verify");
