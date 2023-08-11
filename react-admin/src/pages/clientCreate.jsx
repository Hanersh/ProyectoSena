import { React, Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useClients } from "../context/ClientContext";
import { useNavigate, useParams } from "react-router-dom";

import Menu from "./Menu";

function ClientForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createClient, getClient, updateClient } = useClients();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadClient() {
      if (params.id) {
        const client = await getClient(params.id);
        console.log(client);
        setValue("documento", client.documento);
        setValue("nombre", client.nombre);
        setValue("apellido", client.apellido);
        setValue("email", client.email);
        setValue("telefono", client.telefono);
      }
    }
    loadClient();
  }, [getClient, params.id, setValue]);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateClient(params.id, data);
    } else {
      createClient(data);
    }
    navigate("/Clients");
  });

  return (
    <Fragment>
      <Menu />
      <div className="product-form container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Documento"
            {...register("documento")}
            autoFocus
          />
          <input type="text" placeholder="Nombre" {...register("nombre")} />
          <input type="text" placeholder="Apellido" {...register("apellido")} />
          <input type="email" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="Telefono" {...register("telefono")} />
          <button>Save</button>
        </form>
      </div>
    </Fragment>
  );
}

export default ClientForm;
