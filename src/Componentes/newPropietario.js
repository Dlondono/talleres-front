import React,{useState} from 'react';
import "../Home/homeP.css";
import axios from 'axios';

  
const url="https://api-propietarios.herokuapp.com/api/student"
export default function Propietario(){
    const [nombre,setNombre] =useState('');
    const [cedula,setCedula] =useState('');
    const [email,setEmail] =useState('');
    const [direccion,setDireccion] = useState('');
    const [celular,setCelular] =useState('');
       const guardarPropietario=async()=>{
        axios.post('https://api-propietarios.herokuapp.com/api/student', {
          name: nombre,
          cc:cedula,
          email:email,
          direccion:direccion,
          celular:celular
        })
        .then(function (response) {
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    return(
      
        <div class="container">
          <h1>Registro de Propietario</h1>
            <br></br> <br></br> <br></br>  
            <div class="control">
            <input class="input" type="text" placeholder="Nombre completo" id="nombre" onChange={(ev)=> setNombre(ev.target.value)}></input>
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
