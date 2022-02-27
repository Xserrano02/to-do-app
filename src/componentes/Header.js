import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'

const Header = ({iconoChange,cambiarChange}) => {

    const handlerShow=()=>{
        cambiarChange(!iconoChange)
    }

    return ( 
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            <button className="header__boton"
            onClick={handlerShow}>
                {iconoChange ?'No mostrar completadas': 'Mostrar completadas' }
                <FontAwesomeIcon icon={iconoChange ?faEyeSlash:faEye} className="header__icono-boton" />
            </button>
        </header>
     );
}
 
export default Header;