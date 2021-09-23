import React,{useState} from 'react';
import "../Home/homeP.css";


export default function Propietario() {
  const [token,setToken] =useState('');
  const ingresar = ()=>{}

  return (
    <div> 
          
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
          <div class="container" >
          <section class="hero is-link">
            <div class="heroB">
                <p class="title">
                Ver estado de la mascota
                </p>
                
            </div>
            </section>
          </div>
          
          <div class="container is-max-desktop">
          <label class="label">Token</label>
          <div class="control">
            <input class="input is-link" type="text" id="token" placeholder="Ingrese su token" onChange={(ev)=> setToken(ev.target.value)} ></input>
          </div>
          <br></br>
          <div class="container is-max-desktop ">
            <div class="field">
              <p class="control">
              <div class="buttons is-centered">
                <button class="button is-primary" onClick={ingresar}>Ingresar</button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
        
  )
  }