import { Fragment, useEffect } from "react";
import { useClients } from "../context/ClientContext";
import { Link } from "react-router-dom";

import Menu from "./Menu";

function ClientList() {
  const { getClients, deleteClient, client } = useClients();

  useEffect(() => {
    getClients();
  }, [getClients]);

  return (
    <Fragment>
      <Menu />

      <div className="product-list container">
        <h1>Lista de Clientes</h1>
        <div className="add-button-container">
          {/* se inhabilita boton agregar, esperando solo regitros que llegen de singup del cliente
            <Link to="/Clients-add">
                <button className="add-button">Nuevo Cliente</button>
            </Link> */}
        </div>
        <table>
          <thead className="table-header">
            <tr>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Password</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {client.map((client) => (
              <tr key={client._id}>
                <td className="table-cell">{client.documento}</td>
                <td className="table-cell">{client.nombre} </td>
                <td className="table-cell">{client.apellido} </td>
                <td className="table-cell">{client.email} </td>
                <td className="table-cell">{client.telefono} </td>
                <td className="table-cell">{client.password} </td>
                <td>
                  <div className="button-group">
                    <Link to={`/clients/${client._id}`}>
                      <button className="update-button">Editar</button>
                    </Link>
                    <button
                      className="delete-button"
                      onClick={() => deleteClient(client._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default ClientList;
