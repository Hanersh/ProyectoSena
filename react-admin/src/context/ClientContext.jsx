import { createContext, useContext, useState } from "react";
import {
  createClientRequest,
  getClientsRequest,
  deleteClientRequest,
  getClientRequest,
  updateClientRequest,
} from "../api/client";

const ClientContext = createContext();

export const useClients = () => {
  const context = useContext(ClientContext);

  if (!context) {
    throw new Error("useClients must be use within a ClientProvider");
  }
  return context;
};

export function ClientProvider({ children }) {
  const [client, setClients] = useState([]);

  const getClients = async () => {
    try {
      const res = await getClientsRequest();
      setClients(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createClient = async (client) => {
    const res = await createClientRequest(client);
    console.log(res);
  };

  const deleteClient = async (id) => {
    try {
      const res = await deleteClientRequest(id);
      if (res.status === 204)
        setClients(client.filter((client) => client._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getClient = async (id) => {
    try {
      const res = await getClientRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateClient = async (id, client) => {
    try {
      await updateClientRequest(id, client);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        client,
        createClient,
        getClients,
        deleteClient,
        getClient,
        updateClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
