import '../User/diseño.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import Logo from "../assets/Mascotas.png";
import React,{useState} from 'react';



export default (props)=> {
  
const auth = getAuth();
const [correo,setCorreo] =useState('');
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.email;
      setCorreo(uid);
      // ...
    } else {
      // User is signed out
      console.log("no hya usa");
    }
  });
  const salir = async()=> {
      await signOut(auth).then(() => {
        // Sign-out successful.
        window.location.replace('/')
      }).catch((error) => {
        // An error happened.
        
      });
  }
  return (
    
        <div class="container is fluid">
            <nav class="navbar">
            <div class="container is-fluid" id="">
        <div class="columns">
            <div class="column is-four-fifths is-centered">
                <br></br><br></br><br></br>
                <p class="title has-text-light">{correo}</p></div>
                
            <div class="column">
                <img src={Logo}></img>
            </div>
            
        </div>
        </div>
        </nav>
        <div class="container">
        <br></br><br></br><br></br>
        <div class="buttons is-centered">
                    <button class="button is-primary is-light" onClick={salir}>Cerrar Sesion</button>
                </div>
        </div>
        </div>
        
    
        
  )
 

}





