import { Fragment, useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

import Menu from "./Menu";

function ProductList() {
  const { getProducts, deleteProduct, product } = useProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      <Menu />

      <div className="product-list container">
        <h1>Lista de Productos</h1>
        <div className="add-button-container">
          <Link to="/products-add">
            <button className="add-button">Nuevo Producto</button>
          </Link>
        </div>
        <table>
          <thead className="table-header">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr key={product._id}>
                <td className="table-cell">{product.nombre}</td>
                <td className="table-cell">{product.descripcion} </td>
                <td className="table-cell">{product.precio} </td>
                <td className="table-cell">{product.imgURL} </td>
                <td>
                  <div className="button-group">
                    <Link to={`/products/${product._id}`}>
                      <button className="update-button">Editar</button>
                    </Link>
                    <button
                      className="delete-button"
                      onClick={() => deleteProduct(product._id)}
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

export default ProductList;
