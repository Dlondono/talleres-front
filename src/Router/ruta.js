import React from 'react';
import Registrar from '../Home/registro.js';
import Home from '../Home/home.js';
import homeP from '../Home/homeP.js';
import User  from '../User/usuario.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Empleados from '../view/vistaEmpleado.js';
import newEmpleados from '../Componentes/newEmpleados.js';
import administrador from '../User/administrador.js';

function ruta(){
    return (
        
        <BrowserRouter>
            <Route exact path="/LoginE" component={Home}></Route>
            <Route exact path="/" component={homeP}></Route>
            <Route exact path="/registro" component={Registrar}></Route>
            <Route exact path="/usuario" component={User}></Route>
            <Route exact path="/empleado" component={Empleados}></Route>
            <Route exact path="/Admin" component={administrador}></Route>
            <Route exact path="/NewE" component={newEmpleados}></Route>
         </BrowserRouter>    
         
    );
}
export default ruta;