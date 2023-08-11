import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Menu() {
  const { isAuthenticated, logout, user } = useAuth();
  //console.log(user);

  return (
    <Fragment>
      <header className="header">
        <img className="bg" src="/" alt="" />
        <img className="esp" src="/" alt="" />

        <div className="menu container">
          <Link to="/" className="logo">
            <img src="ASSETS/svg/logo.svg" alt="" width="50px" />
            Smooth Shop Admin
          </Link>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            {" "}
            <img src="ASSETS/images/menu.png" className="menu-icono" alt="" />
          </label>
          <nav className="navbar">
            <ul>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/Clients">Clientes</Link>
                  </li>
                  <li>
                    <Link to="/Products">Productos</Link>
                  </li>
                  <li
                    style={{
                      marginTop: "3px",
                      display: "table-row",
                      padding: "15px",
                    }}
                  >
                    Bienvenido <hr /> {user.username}
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        logout();
                      }}
                      className="action_btn"
                    >
                      Salir
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/Login" className="action_btn">
                      Ingresa
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default Menu;
