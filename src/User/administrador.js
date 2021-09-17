import React from "react";
import "../Home/homeP.css";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import Logo3 from '../assets/transporte.jpeg';

const crearTrabajador = () => {
  window.location.replace("/NewE");
};
export default function administrador() {
  const auth = getAuth();
  const salir = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.replace("/");
      })
      .catch((error) => {
        // An error happened.
      });
    console.log("funciono");
  };
  return (
    <div>
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="/Admin">
            <a href="/Admin">
              {" "}
              <strong>Administrador</strong>
            </a>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="navbar-item brand-text" href="/empleado">
              <a href="/empleado"> Registrar mascota</a>
            </a>
            <button class="button is-dark" onClick={salir}>
              Salir
            </button>
            <a> </a>
          </div>
        </div>
      </nav>
      <br></br>

      <div class="container">
        <h3 class="mensaje">Hola Admin. Espero que tengas un buen dia!</h3>
      </div>
      <br></br>
      <button class="button is-dark" onClick={crearTrabajador}>
        Crear trabajador
      </button>
      <div>
        
            <img
              src={Logo3} width="250" height="80"
              alt="Placeholder image"
            ></img>
        </div>
          </div>
  );
}
