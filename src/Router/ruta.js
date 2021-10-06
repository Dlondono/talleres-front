import React from 'react';

import {BrowserRouter,Route} from 'react-router-dom';

import newEmpleados from '../Componentes/newEmpleados.js';



function ruta(){
    return (
        
        <BrowserRouter>
          
            <Route exact path="/" component={newEmpleados}></Route>
            
         </BrowserRouter>    
         
    );
}
export default ruta;