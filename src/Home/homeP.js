import React from "react";
import "./homeP.css";
import Logo2 from "../assets/border.png";
import Grupo from "../assets/perros1.jpeg";

export default function homeP() {
  return (
    <div>
      <section class="hero is-medium">
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div class="navbar-brand is-transparent">
            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item"></a>

              <a class="navbar-item">Inicio</a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Servicios</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">Sobre nosotros</a>
                  <a class="navbar-item">Clases</a>
                  <a class="navbar-item">Transporte</a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary" href="LoginE">
                    <strong>Ingresar</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <h1 class="titulo">Mascotas</h1>
        <div class="hero">
          <div class="has-text-centered">
            <img src={Logo2} width="250" height="80"></img>
          </div>
        </div>
      </section>
      <section class="blog-posts">
        <div class="">
          <div class="columns">
            <div class="">
              <div class="columns featured-post is-multiline">
                <div class="column is-12 post">
                  <article class="columns featured">
                    <div class="column is-7 post-img ">
                      <br></br>
                      <img
                        src={Grupo}
                        width="700"
                        height="80"
                        alt="Sobre nosotros"
                      ></img>
                    </div>
                    <div class="column is-5 featured-content va">
                      <div>
                        <h1 class="titulo1">Sobre nosotros</h1>
                        <p class="post-excerpt">
                          Guardería Mascotas, ofrece nuevas experiencias para
                          todo tipo de mascotas, con múltiples servicios para
                          consentir a tu mejor amigo peludo, ofreciendo lugares
                          para que pueda socializar anteponiendo su seguridad,
                          bienestar y tranquilidad.
                        </p>
                        <br></br>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <hr></hr>
              <div class="columns is-multiline">
                <div class="column post is-6">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img src="" alt="Guarderia mascota"></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <h3 class="heading post-category">Category Name</h3>
                      <h1 class="title post-title">
                        Slightly Longer Blog Post Title
                      </h1>
                      <p class="post-excerpt">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusamus ratione harum eaque, animi nulla tempore
                        quis, quam voluptatum.
                      </p>
                      <br></br>
                      <a href="#" class="button is-primary">
                        Read More
                      </a>
                    </div>
                  </article>
                </div>
                <div class="column post is-6">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img
                        src="https://cdn.emk.dev/templates/post-img.png"
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <h3 class="heading post-category">Category Name</h3>
                      <h1 class="title post-title">
                        Slightly Longer Blog Post Title
                      </h1>
                      <p class="post-excerpt">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusamus ratione harum eaque, animi nulla tempore
                        quis, quam voluptatum.
                      </p>
                      <br></br>
                      <a href="#" class="button is-primary">
                        Read More
                      </a>
                    </div>
                  </article>
                </div>
                <div class="column post is-4">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img
                        src="https://cdn.emk.dev/templates/post-img.png"
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <h3 class="heading post-category">Category Name</h3>
                      <h1 class="title post-title">
                        Slightly Longer Blog Post Title
                      </h1>
                      <p class="post-excerpt">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusamus ratione harum eaque, animi nulla tempore
                        quis, quam voluptatum.
                      </p>
                      <br></br>
                      <a href="#" class="button is-primary">
                        Read More
                      </a>
                    </div>
                  </article>
                </div>
                <div class="column post is-4">
                  <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                      <img
                        src="https://cdn.emk.dev/templates/post-img.png"
                        alt="Featured Image"
                      ></img>
                    </div>
                    <div class="column is-12 featured-content ">
                      <h3 class="heading post-category">Category Name</h3>
                      <h1 class="title post-title">
                        Slightly Longer Blog Post Title
                      </h1>
                      <p class="post-excerpt">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusamus ratione harum eaque, animi nulla tempore
                        quis, quam voluptatum.
                      </p>
                      <br></br>
                      <a href="#" class="button is-primary">
                        Read More
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
