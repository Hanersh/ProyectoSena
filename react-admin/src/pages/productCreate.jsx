import { React, Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";

import Menu from "./Menu";

function ProducForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createProduct, getProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const product = await getProduct(params.id);
        console.log(product);
        setValue("nombre", product.nombre);
        setValue("descripcion", product.descripcion);
        setValue("precio", product.precio);
        setValue("imgURL", product.imgURL);
      }
    }
    loadProduct();
  }, [getProduct, params.id, setValue]);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateProduct(params.id, data);
    } else {
      createProduct(data);
    }
    navigate("/Products");
  });

  return (
    <Fragment>
      <Menu />
      <div className="product-form container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre")}
            autoFocus
          />
          <textarea
            placeholder="Descripcion"
            {...register("descripcion")}
          ></textarea>
          <input type="text" placeholder="Precio" {...register("precio")} />
          <input type="text" placeholder="Imagen" {...register("imgURL")} />
          <button>Save</button>
        </form>
      </div>
    </Fragment>
  );
}

export default ProducForm;
