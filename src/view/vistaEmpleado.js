import React,{useState} from 'react';
import { collection,doc, setDoc } from 'firebase/firestore';
import { db } from '../index';
import Mascotas from '../modelos/mascotas';
import './diseñoEmpleados.css';


export default function Empleado(){
    const [nombre,setNombre] =useState('');
    const [edad,setEdad] = useState('');
    const [raza,setRaza] =useState('');
    const [tamaño,setTamaño] = useState('');
    const [cuidados,setCuidados] =useState('');
    const guardarMascota=async()=>{
        let s =  new Mascotas("nombre ","edad","raza","tamaño","cuidados","dueño");
        await setDoc(doc(db, "Mascotas", "ID"), {
          name: s.nombre,
          edad: s.edad,
          raza: s.raza,
          tamaño:s.tamaño,
          cuidados:s.cuidados,
          owner:s.owner,
        });
    }
  
    return(

        <div class="container">
          <h1>Registro de Mascotas</h1>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Nombre" id="nombre" onChange={(ev)=> setNombre(ev.target.value)}></input>
            </div>
            <br></br><br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Edad" id="edad" onChange={(ev)=> setEdad(ev.target.value)}></input>
            </div>
            <br></br><br></br>
            <div class="select" onSelect={(ev)=>setRaza(ev.target.value)}>
                <select>
                <option>Seleccionar raza</option>
                <option>opciones</option>
                <option>opciones 2</option>
                </select>
            </div>
            <br></br><br></br>
            <div class="select" onSelect={(ev)=>setTamaño(ev.target.value)}>
                <select>
                <option>Seleccionar tamaño</option>
                <option>Pequeño</option>
                <option>Mediano</option>
                <option>Grande</option>
                </select>
            </div>
            <br></br><br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Observaciones o cuidados" onChange={(ev)=> setCuidados(ev.target.value)}></input>
            </div>
            <br></br><br></br>
            <div class="container is-max-desktop ">
            <div class="field">
              <p class="control">
              <div class="buttons is-centered">
                <button class="button is-primary is-light" onClick={guardarMascota}>Guardar mascota</button>
              
                </div>
                
              </p>
            </div>
          </div>
            </div>
    )
}
