import axios from "./axios";

export const getClientsRequest = () => axios.get("/clients");

export const getClientRequest = (id) => axios.get(`/clients/${id}`);

export const createClientRequest = (clients) => axios.post("/clients", clients);

export const updateClientRequest = (id, clients) =>
  axios.put(`/clients/${id}`, clients);

export const deleteClientRequest = (id) => axios.delete(`/clients/${id}`);
