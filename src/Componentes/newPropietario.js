import React,{useState} from 'react';
import { collection,doc, addDoc } from 'firebase/firestore';
import { db } from '../index';
import Mascotas from '../modelos/mascotas';
import "../Home/homeP.css";


export default function Propietario(){
    const [nombre,setNombre] =useState('');
    const [apellido,setApellido] =useState('');
    const [cedula,setCedula] =useState('');
    const [email,setEmail] =useState('');
    const [direccion,setDireccion] = useState('');
    const [celular,setCelular] =useState('');
    
    const guardarPropietario=async()=>{
    }
  
    return(

        <div class="container">
          <h1>Registro de Propietario</h1>
            <br></br> <br></br> <br></br>  
            <div class="control">
            <input class="input" type="text" placeholder="Nombre" id="nombre" onChange={(ev)=> setNombre(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Apellido" id="apellido" onChange={(ev)=> setApellido(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
                <input class="input" type="number" placeholder="Cedula" id="cedula" onChange={(ev)=> setCedula(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
            <input class="input" type="text" placeholder="Direccion" id="direccion" onChange={(ev)=> setDireccion(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
            <input class="input" type="text" placeholder="Email" id="email" onChange={(ev)=> setEmail(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
                <input class="input" type="number" placeholder="Celular" id="celular" onChange={(ev)=> setCelular(ev.target.value)}></input>
            </div>
            <br></br>
     
            <br></br><br></br><br></br>
            <div class="container is-max-desktop">
            <div class="field">
              <p class="control">
              <div class="buttons is-centered">
                <button class="button is-primary" onClick={guardarPropietario}>Guardar Propietario</button> 
                </div>
                
              </p>
            </div>
          </div>
            </div>
    )
}
