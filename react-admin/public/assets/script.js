document.getElementById("btn_registrarse").addEventListener("click", registrer);
document
  .getElementById("btn_iniciar-sesion")
  .addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

/**declaración de variables*/
var login_registrer = document.querySelector(".login_registrer");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_registrer = document.querySelector(".caja_trasera-registrer");
var formulario__login = document.querySelector(".formulario__login");
var formulario__registrer = document.querySelector(".formulario__registrer");

function anchoPagina() {
  if (window.innerWidth > 1000) {
    caja_trasera_login.style.display = "block";
    caja_trasera_registrer.style.display = "block";
  } else {
    caja_trasera_registrer.style.display = "block";
    caja_trasera_registrer.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario__login.style.display = "block";
    formulario__registrer.style.display = "none";
    login_registrer.style.left = "0px";
  }
}

anchoPagina();

function iniciarSesion() {
  if (window.innerWidth > 1000) {
    formulario__registrer.style.display = "none";
    login_registrer.style.left = "15px";
    formulario__login.style.display = "block";
    caja_trasera_registrer.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario__registrer.style.display = "none";
    login_registrer.style.left = "0px";
    formulario__login.style.display = "block";
    caja_trasera_registrer.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function registrer() {
  if (window.innerWidth > 1000) {
    formulario__registrer.style.display = "block";
    login_registrer.style.left = "365px";
    formulario__login.style.display = "none";
    caja_trasera_registrer.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario__registrer.style.display = "block";
    login_registrer.style.left = "0px";
    formulario__login.style.display = "none";
    caja_trasera_registrer.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}
