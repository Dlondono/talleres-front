import './centrar.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection,doc, setDoc } from 'firebase/firestore';
import { db } from '../index';
import Empleados from '../Database/empleados';
import React,{useState} from 'react';



const Registrarse = async () =>{
  //window.location.replace('/registro')
  let s =  new Empleados("jose","cc","fff","4","5","6","7","8");
  await setDoc(doc(db, "Empleados", "SOy un ID"), {
    name: s.nombre,
    cc: s.cc,
    creador: s.creador,
    dirreccion:s.dirreccion,
    email:s.email,
    fechaDeCreacion:s.fechaDeCreacion,
    fechadeActualizacion:s.fechadeActualizacion,
    rol:s.rol
  });
 
  //
}


export default function Hero() {
  const [correo,setCorreo] =useState('');
  const [contraseña,setContraseña] = useState('');
  const auth = getAuth();
  const IniciarSesion = async() =>{
    await signInWithEmailAndPassword(auth, correo, contraseña)
    .then((userCredential) => {
      // Signed in
      //const user = userCredential.user;
      
      window.location.replace('/usuario');
    })
    .catch((error) => {
      //const errorCode = error.code;
      //const errorMessage = error.message;
      console.log("F");
    });
  }
  return (
    <div> 
          
         <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
          <div class="container " >
          <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                Iniciar Sesion
                </p>
                
            </div>
            </section>
          </div>
          <div class="container is-max-desktop">
          <label class="label">Usuario</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-link" type="text" id="correo" placeholder="Ingrese su usuario" onChange={(ev)=> setCorreo(ev.target.value)} ></input>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>

          </div>
          <label class="label">Contraseña</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="password" id="contraseña"  placeholder="Ingrese su contraseña" onChange={(ev)=> setContraseña(ev.target.value)} ></input>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>

          </div>
          <br></br>
          <div class="container is-max-desktop ">
            <div class="field">
              <p class="control">
              <div class="buttons is-centered">
                <button class="button is-primary is-light" onClick={IniciarSesion}>Iniciar Sesion</button>
              
                </div>
                
              </p>
            </div>
          </div>

          </div>       
            <footer class="footer">
            <div class="content has-text-centered">
                <p>
                ¿Nuevo usuario? <strong>Registrese</strong> en nuestra pagina dando click en el boton
                </p>
                <button class="button is-link is-light" onClick={Registrarse}>Registrarse</button>
            </div>
            </footer>



        </div>
        
  )
}
