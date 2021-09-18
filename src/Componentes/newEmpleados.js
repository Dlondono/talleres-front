import React,{useState} from 'react';
import { collection,doc, addDoc } from 'firebase/firestore';
import { db } from '../index';
import Mascotas from '../modelos/mascotas';
import "../Home/homeP.css";


export default function Empleado(){
    const [id,setId] =useState('');
    const [nombre,setNombre] =useState('');
    const [rol,setRol] = useState('');
    const [email,setEmail] =useState('');
    const [direccion,setDireccion] = useState('');
    const guardarEmpleado=async()=>{
    }
  
    return(

        <div class="container">
          <h1>Registro de Empleados</h1>
            <br></br> <br></br> <br></br> <br></br> <br></br> 
            <div class="control">
                <input class="input" type="text" placeholder="Id" id="id" onChange={(ev)=> setId(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
            <input class="input" type="text" placeholder="Nombre" id="nombre" onChange={(ev)=> setNombre(ev.target.value)}></input>
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
            <div class="select" onChange={(ev)=>setRol(ev.target.value)}>

                <select>
                <option>Seleccionar Rol</option>
                <option>Director</option>
                <option>Profesor</option>
                <option>Conductor</option>
                </select>
            </div>
            <br></br><br></br><br></br>
            <div class="container is-max-desktop">
            <div class="field">
              <p class="control">
              <div class="buttons is-centered">
                <button class="button is-primary" onClick={guardarEmpleado}>Guardar empleado</button> 
                </div>
                
              </p>
            </div>
          </div>
            </div>
    )
}
