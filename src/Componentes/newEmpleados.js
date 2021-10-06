import React, { useState, useEffect } from "react";
import "../Home/homeP.css";
import Modal from "react-modal";
import axios from "axios";
import {Link} from 'react-router-dom';


Modal.setAppElement("#root");

const url = "https://mascotas-empleados.herokuapp.com/";

export default function Talleres() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [nombreAdmin, setNombreAdmin] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [horario, setHorario] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  const buscarTaller = (id,e) => {
    e.preventDefault();
    axios
      .get("https://api-empleados.herokuapp.com/api/empleado/"+id, {

      })
      .then(function (response) {
        console.log(response);
        setId(response.data.cc);
        setNombre(response.data.nombre);
        setNombreAdmin(response.data.nombreAdmin);
        setLatitud(response.data.latitud);
        setLongitud(response.data.longitud);
        setHorario(response.data.horario);
        setDescripcion(response.data.descripcion);
        setMunicipio(response.data.municipio);
        setEstado("editar");
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const eliminarTaller = (id,e) => {
    e.preventDefault();
    axios
      .delete("https://api-empleados.herokuapp.com/api/empleado/"+id, {

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const guardarTaller = (e) => {
    e.preventDefault();
    if(estado!="editar"){
    axios
      .post("https://mascotas-empleados.herokuapp.com/empleado", {
        id: id,
        nombre: nombre,
        nombreAdmin : nombreAdmin,
        latitud: latitud,
        longitud: longitud,
        horario: horario,
        descripcion: descripcion,
        municipio : municipio
      })

      .then(function (response) {
        toggleModal();
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      axios
      .put("https://mascotas-empleados.herokuapp.com/empleado/"+id, {
        id: id,
        nombre: nombre,
        nombreAdmin : nombreAdmin,
        latitud: latitud,
        longitud: longitud,
        horario: horario,
        descripcion: descripcion,
        municipio : municipio
      })
      .then(function (response) {
        toggleModal();
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://mascotas-empleados.herokuapp.com/getEmpleados"
      );
      setPosts({ blogs: data });
    };
    fetchPostList();
  }, [setPosts]);

  return (
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
          <button
            class="button is-primary"
            onClick={toggleModal}
            style={{ left: "19%" }}
          >
            Salir
          </button>
        </Modal>
      </div>
      <div class="container">
        <h1>Registro de Talleres</h1>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Id"
            id="id"
            required="true"
            onChange={(ev) => setId(ev.target.value)}
            value={id}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Nombre"
            id="nombre"
            required="true"
            onChange={(ev) => setNombre(ev.target.value)}
            value={nombre}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="NombreAdmin"
            id="nombreAdmin"
            required="true"
            onChange={(ev) => setNombreAdmin(ev.target.value)}
            value={nombreAdmin}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Latitud"
            id="latitud"
            required="true"
            onChange={(ev) => setLatitud(ev.target.value)}
            value={latitud}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Longitud"
            id="longitud"
            required="true"
            onChange={(ev) => setLongitud(ev.target.value)}
            value={longitud}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Horario"
            id="horario"
            required="true"
            onChange={(ev) => setHorario(ev.target.value)}
            value={horario}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Descripcion"
            id="descripcion"
            required="true"
            onChange={(ev) => setDescripcion(ev.target.value)}
            value={descripcion}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Municipio"
            id="municipio"
            required="true"
            onChange={(ev) => setMunicipio(ev.target.value)}
            value={municipio}
          ></input>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div class="container is-max-desktop">
          <div class="field">
            <p class="control">
              <div class="buttons is-centered">
                <button
                  class="button is-primary"
                  onClick={(e) => {
                    guardarTaller(e);
                  }}
                >
                  Guardar Taller
                </button>
              </div>
            </p>
            <hr></hr>
              <h2>Seleccione el taller que desea modificar</h2>
              <br></br>
            <div class="table_wrapper is-centered">
              <table class="table is-bordered">
                <thead>
                  <tr>
                    <th style= {{color:"white"}}>ID</th>
                    <th style= {{color:"white"}}>Nombre</th>
                    <th style= {{color:"white"}}>Municipio</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.blogs &&
                    posts.blogs.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>                    
                        <td>{item.municipio}</td>              
                        <td><button
                          class="button is-primary"
                          onClick={(e) => {
                            buscarTaller(item.id,e);
                          }}
                        >
                          Editar
                        </button> </td> 
                        <td><button
                          class="button is-primary"
                          onClick={(e) => {
                            eliminarTaller(item.id,e);
                          }}
                        >
                          Borrar
                        </button></td>         
                      </tr>
                      
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
