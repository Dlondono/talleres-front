import React from "react";
import "../Home/homeP.css";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import Logo3 from '../assets/transporte.jpeg';
import Dueño from '../assets/dueño.jpeg';
import Trabajador from '../assets/trabajador.jpeg';
import Patas from '../assets/patas.jpeg';

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
        Registrar Empleado
      </button>
      
      <section class="blog-posts">
        <div class="">
          <div class="columns">
            <div class="">
              <div class="columns is-multiline">
  
                <div class="column post is-4">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img src={Trabajador} width="350" height="80" 
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <h3 class="heading post-category">Category Name</h3>
                      <a href="#" class="button is-primary">
                        Registrar Empleado
                      </a>
                    </div>
                  </article>
                </div>
                <div class="column post is-4">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img src={Dueño} width="300" height="70" 
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <h3 class="heading post-category">Category Name</h3>
                      <a href="#" class="button is-primary">
                        Registrar Propietario
                      </a>
                    </div>
                  </article>
                </div>
                <div class="column post is-4">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img src={Patas} width="230" height="80" 
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <h3 class="heading post-category">Category Name</h3>
                      <a href="#" class="button is-primary">
                        Registrar Mascota
                      </a>
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
