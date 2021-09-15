import React from 'react';
import './homeP.css';
import Logo from '../Mascotas.png';

export default function homeP(){
    return(
        <div>
                <section class="hero is-medium">
                    <div class="hero-head">
                    <div class="container">
                        <nav class="navbar" role="navigation" aria-label="main navigation">

                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-start">
                            <a class="navbar-item is-active">
                                Inicio
                            </a>
                            </div>
                            <div class="navbar-end">
                            <div class="navbar-item">
                                <a href="#">Clientes</a>
                                <a href="/LoginE">Empleados</a>
                                <a href="#">
                                <i class="fab fa-facebook"></i>
                                </a>
                                <a href="#">
                                <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                <i class="fas fa-rss-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        </nav>
                    </div>
                    </div>
                    <div class="hero-body">
                    <div class="container has-text-centered">
                        <img src={Logo} width="300" height="100"></img>
                        <h2 class="subtitle">
                        Ghost's Casper theme made with Bulma
                        </h2>
                    </div>
                    </div>
                </section>
                <section class="blog-posts">
                    <div class="container">
                    <div class="columns">
                        <div class="column is-10 is-offset-1">
                        <div class="columns featured-post is-multiline">
                            <div class="column is-12 post">
                            <article class="columns featured">
                                <div class="column is-7 post-img ">
                                <img src="https://cdn.emk.dev/templates/featured-image.png" alt=""></img>
                                </div>
                                <div class="column is-5 featured-content va">
                                <div>
                                    <h3 class="heading post-category">Category Name</h3>
                                    <h1 class="title post-title">Blog Posts Template</h1>
                                    <p class="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                    <br></br>
                                    <a href="#" class="button is-primary">Read More</a>
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
                                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                </div>
                                <div class="column is-12 featured-content ">
                                <h3 class="heading post-category">Category Name</h3>
                                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                <br></br>
                                <a href="#" class="button is-primary">Read More</a>
                                </div>
                            </article>
                            </div>
                            <div class="column post is-6">
                            <article class="columns is-multiline">
                                <div class="column is-12 post-img">
                                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                </div>
                                <div class="column is-12 featured-content ">
                                <h3 class="heading post-category">Category Name</h3>
                                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                <br></br>
                                <a href="#" class="button is-primary">Read More</a>
                                </div>
                            </article>
                            </div>
                            <div class="column post is-4">
                            <article class="columns is-multiline">
                                <div class="column is-12 post-img">
                                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                </div>
                                <div class="column is-12 featured-content ">
                                <h3 class="heading post-category">Category Name</h3>
                                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                <br></br>
                                <a href="#" class="button is-primary">Read More</a>
                                </div>
                            </article>
                            </div>
                            <div class="column post is-4">
                            <article class="columns is-multiline">
                                <div class="column is-12 post-img">
                                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                </div>
                                <div class="column is-12 featured-content ">
                                <h3 class="heading post-category">Category Name</h3>
                                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                <br></br>
                                <a href="#" class="button is-primary">Read More</a>
                                </div>
                            </article>
                            </div>
                            <div class="column post is-4">
                            <article class="columns is-multiline">
                                <div class="column is-12 post-img">
                                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                </div>
                                <div class="column is-12 featured-content ">
                                <h3 class="heading post-category">Category Name</h3>
                                <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                <br></br>
                                <a href="#" class="button is-primary">Read More</a>
                                </div>
                            </article>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </section>

        </div>
    )
}