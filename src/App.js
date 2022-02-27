import React, { useState,useEffect } from 'react';
import './App.css'
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';
import { faL } from '@fortawesome/free-solid-svg-icons';

function App() {
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  const [iconoChange, cambiarChange] = useState(false)
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

    useEffect(()=>{
      localStorage.setItem('tareas', JSON.stringify(tareas));
      console.log('tareas cambiaron')
    },[tareas])
    

  return (
    <div className="contenedor">
      <Header iconoChange={iconoChange} cambiarChange={cambiarChange}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} iconoChange={iconoChange} cambiarChange={cambiarChange}/>
    </div>
  );
}

export default App;
