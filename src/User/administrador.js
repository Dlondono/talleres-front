import React from 'react';
import '../Home/homeP.css';
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

const crearTrabajador=()=>{
    window.location.replace("/NewE");
}
export default function administrador () {
    const auth = getAuth();
    const salir = async()=> {
        await signOut(auth).then(() => {
          // Sign-out successful.
          window.location.replace('/')
        }).catch((error) => {
          // An error happened.
          
        });
        console.log("funciono");
    }
    return(
        <div>
            <nav class="navbar">
                    <div class="navbar-brand">
                        <a class="navbar-item brand-text" href="/Admin">
                            <a href="/Admin"> Administrador del negocio <strong> Mascotas</strong>   </a>
                        </a>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                        <a class="navbar-item brand-text" href="/empleado">
                            <a href="/empleado"> Registrar mascota</a>
                        </a>
                            <button class="button is-dark" onClick={salir}>Salir</button>
                            <a> </a>
                        </div>

                    </div>
            </nav>
            <br></br>
            <div class="container">
                <div class="columns">
                    <div class="column is-3">
                        <aside class="menu is-hidden-mobile">
                            <p class="menu-label"><strong>General</strong></p>
                        </aside>
                    </div>
                    <div class="column is-9">
                    <section  class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hola Admin.
                            </h1>
                            <h2 class="subtitle">
                                Espero que tengas un buen dia!
                            </h2>
                        </div>
                    </div>
                    </section>
                    <br></br>
                    <button class="button is-dark" onClick={crearTrabajador}>Crear trabajador</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}