import React,{useState} from 'react';
import { collection,doc, addDoc } from 'firebase/firestore';
import { db } from '../index';
import Mascotas from '../modelos/mascotas';
import "../Home/homeP.css";
import Modal from "react-modal";
import axios from 'axios';


Modal.setAppElement("#root");


export default function Empleado(){
    const [isOpen, setIsOpen] = useState(false);
    const [idPropietario,setIdPropietario] =useState('');
    const [nombre,setNombre] =useState('');
    const [edad,setEdad] = useState('');
    const [raza,setRaza] =useState('');
    const [tamaño,setTamaño] = useState('');
    const [cuidados,setCuidados] =useState('');
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    const guardarMascota=async()=>{
        let s =  new Mascotas(nombre,edad,raza,tamaño,cuidados,"dueño");
        await addDoc(collection (db, "Mascotas"), {
          name: s.nombre,
          edad: s.edad,
          raza: s.raza,
          tamaño:s.tamaño,
          cuidados:s.cuidados,
          owner:s.owner,
        }); 
    }
  
    return(
      <form>
           <div className="App">
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>Registro Exitoso</div>
        <br></br>
        <button class="button is-primary" onClick={toggleModal} style= {{left:"19%"}}>Salir</button>
      </Modal>
    </div>
        <div class="container">
          <h1>Registro de Mascotas</h1>
            <br></br> <br></br> <br></br> <br></br> <br></br> 
            <div class="control">
                <input class="input" type="number" placeholder="Id Propietario" id="idPropietario" required="true" onChange={(ev)=> setIdPropietario(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Nombre" id="nombre" required="true" onChange={(ev)=> setNombre(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Edad" id="edad" required="true" onChange={(ev)=> setEdad(ev.target.value)}></input>
            </div>
        
            <div class="select" required="true" onChange={(ev)=>setRaza(ev.target.value)}>
                <select>
                <option>Seleccionar raza</option>
                <option>opciones</option>
                <option>opciones 2</option>
                </select>
            </div>
            <br></br><br></br>
            <div class="select" required="true" onChange={(ev)=>setTamaño(ev.target.value)}>

                <select>
                <option>Seleccionar tamaño</option>
                <option>Pequeño</option>
                <option>Mediano</option>
                <option>Grande</option>
                </select>
            </div>
            <br></br><br></br><br></br>

            <div class="control">
                <input class="input" type="text" placeholder="Observaciones o cuidados" required="true" onChange={(ev)=> setCuidados(ev.target.value)}></input>
            </div>
            <br></br><br></br>
            <div class="container is-max-desktop ">
            <div class="field">
              <p class="control">
              <div class="buttons is-centered">
                <button class="button is-primary" onClick={guardarMascota}>Guardar mascota</button>
              
                </div>
                
              </p>
            </div>
          </div>
            </div>
        </form>
    )
}
