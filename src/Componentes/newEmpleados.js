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
    const [id,setId] =useState('');
    const [nombre,setNombre] =useState('');
    const [rol,setRol] = useState('');
    const [email,setEmail] =useState('');
    const [direccion,setDireccion] = useState('');

    function toggleModal() {
      setIsOpen(!isOpen);
    }

    const guardarEmpleado=async()=>{
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
          <h1>Registro de Empleados</h1>
            <br></br> <br></br> <br></br> <br></br> <br></br> 
            <div class="control">
                <input class="input" type="text" placeholder="Id" id="id" required="true" onChange={(ev)=> setId(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
            <input class="input" type="text" placeholder="Nombre" id="nombre" required="true" onChange={(ev)=> setNombre(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
            <input class="input" type="text" placeholder="Direccion" id="direccion" required="true" onChange={(ev)=> setDireccion(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="control">
            <input class="input" type="text" placeholder="Email" id="email"  required="true" onChange={(ev)=> setEmail(ev.target.value)}></input>
            </div>
            <br></br>
            <div class="select" required="true" onChange={(ev)=>setRol(ev.target.value)}>

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
        </form>
    )
}
