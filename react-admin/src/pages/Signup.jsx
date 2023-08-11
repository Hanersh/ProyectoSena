import React, { Fragment, useEffect } from "react";
import Menu from "./Menu";
import { showAlert } from "../alertUtils";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signup(values);
    } catch (error) {
      // Mostrar el mensaje de error en una alerta
      showAlert(error.message);
    }
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/Login");
  }, [isAuthenticated, navigate]);

  return (
    <Fragment>
      <Menu />

      {/* Form */}
      <main className="formularios container">
        <div className="all container">
          <div className="caja_trasera">
            <div className="caja_trasera-login">
              <h3>¿Ya Tienes Una Cuenta?</h3>
              <p>Inicia Sesión Sesión Para Acceder</p>
              <Link to="/Login">
                <button id="btn_registrarse">Accede</button>
              </Link>
            </div>
          </div>

          {/* Formulario Login y Registro */}
          <div className="login_registrer">
            {/* Registro */}

            <div className="error-container">
              {registerErrors.map((error, i) => (
                <div className="error-alert" key={i}>
                  {error}
                </div>
              ))}
            </div>

            <form className="formulario__registrer" onSubmit={onSubmit}>
              <h2>Regístrarse</h2>
              <input
                type="text"
                {...register("documento", { required: true })}
                placeholder="Documento"
              />
              {errors.documento && (
                <p className="text-red-500">El documento es requerido</p>
              )}
              <input
                type="text"
                {...register("nombre", { required: true })}
                placeholder="Nombre"
              />
              <input
                type="text"
                {...register("apellido", { required: true })}
                placeholder="Apellidos"
              />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">El email es requerido</p>
              )}
              <input
                type="text"
                {...register("telefono", { required: true })}
                placeholder="Telefono"
              />
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">La contraseña es requerido</p>
              )}
              <button type="submit">Regístrarse</button>
            </form>
          </div>
        </div>
      </main>

      <hr />
    </Fragment>
  );
}

export default Form;
