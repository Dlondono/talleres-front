import React from "react";
import "../Home/homeP.css";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import Empleados from '../assets/empleados.jpeg';
import Propietario from '../assets/propietario.jpeg';
import Perro from '../assets/perro.jpeg';
import "../User/diseño.css";

const crearTrabajador = () => {
  window.location.replace("/NewE");
};

const crearPropietario = () => {
  window.location.replace("/NewP");
};

const crearMascota = () => {
  window.location.replace("/empleado");
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
        <div class="navbar-item">
          <a class="navbar-item" href="/Admin">
            <a href="/Admin">
              {" "}
              <strong>Empleado</strong>
            </a>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button class="button is-primary" onClick={salir}>
              Salir
            </button>
            <a> </a>
          </div>
        </div>
      </nav>
      <br></br>

      <div class="container">
        <h3 class="mensaje">Hola Empleado. Espero que tengas un buen dia!</h3>
      </div>
      <br></br>
      
      
      <section class="blog-posts has-text-centered" style= {{padding:"12%"}}>
        <div class="">
          <div class="columns">
            <div class="">
              <div class="columns is-multiline">
  
                <div class="column post is-6">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img src={Propietario} width="300" 
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <button class="button is-primary" onClick={crearPropietario}>
                     Registrar Propietario
                       </button>
                    </div>
                  </article>
                </div>
                <div class="column post is-6">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img src={Perro} width="300" 
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <button class="button is-primary" onClick={crearMascota}>
                     Registrar Mascota
                       </button>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




