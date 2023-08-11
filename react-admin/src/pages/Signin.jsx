import React, { Fragment, useEffect } from "react";
import Menu from "./Menu";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <Fragment>
      <Menu />

      <main className="formularios container">
        {/* Formulario Login y Registro */}
        <div className="login_registrer">
          {/* Login */}

          <div className="error-container">
            {signinErrors.map((error, i) => (
              <div className="error-alert" key={i}>
                {error}
              </div>
            ))}
          </div>

          <form className="formulario__login" onSubmit={onSubmit}>
            <h2>Iniciar Sesión</h2>
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="Usuario"
            />
            {errors.documento && (
              <p className="text-red-500">El usuario es requerido</p>
            )}
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">La contraseña es requerido</p>
            )}
            <button type="submit">Ingresa</button>
          </form>
        </div>
      </main>

      <hr />
    </Fragment>
  );
}

export default Login;
