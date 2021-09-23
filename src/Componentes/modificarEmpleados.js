import React, { useState, useEffect } from "react";
import "../Home/homeP.css";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

const url = "https://mascotas-empleados.herokuapp.com/";
export default class Editar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.state,
    }
  }

  alertMessage() {
    console.log(this.props.location.state);
  }
  render() {
    const { state } = this.props.location
    return (
      <div>
      <button > {state}</button>
      <Empleado/>
      </div>
    )
  }
}

function Empleado() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [empleado,setEmpleado]=useState("");
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  const editEmpleado = (id) => {
    setEmpleado(id);
    console.log(empleado);
   };
  const guardarEmpleado = (e) => {
    e.preventDefault();
    axios
      .post("https://mascotas-empleados.herokuapp.com/empleado", {
        cc: id,
        creador: "Admin",
        direccion: direccion,
        email: email,
        fechaDeActualizacion: "Hoy",
        fechaDeCreacion: "Ayer",
        nombre: nombre,
        rol: rol,
      })

      .then(function (response) {
        toggleModal();
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <h1>Modificar Empleado</h1>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Id"
            id="id"
            required="true"
            onChange={(ev) => setId(ev.target.value)}
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
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Direccion"
            id="direccion"
            required="true"
            onChange={(ev) => setDireccion(ev.target.value)}
          ></input>
        </div>
        <br></br>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Email"
            id="email"
            required="true"
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
        </div>
        <br></br>
        <div
          class="select"
          required="true"
          onChange={(ev) => setRol(ev.target.value)}
        >
          <select>
            <option>Seleccionar Rol</option>
            <option>Director</option>
            <option>Profesor</option>
            <option>Conductor</option>
          </select>
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
                    guardarEmpleado(e);
                  }}
                >
                  Guardar empleado
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}



