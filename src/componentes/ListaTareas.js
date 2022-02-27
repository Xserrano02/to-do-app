import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas,cambiarTareas,iconoChange,cambiarChange}) => {

    const toggleCompletada =(id)=>{
        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id===id){
                return {...tarea, completada:!tarea.completada}
            }return tarea;
        }));
    }

    const editarTarea =(id,nuevoTexto)=>{
        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id===id){
                return {...tarea, texto: nuevoTexto}
            }return tarea;
        }));
    }

    const borrarTarea =(id)=>{
        cambiarTareas(tareas.filter((tarea)=>{
            if(tarea.id !== id){
                return tarea
            }return;
        }));
    }

    return (  
        <ul className="Lista-tareas">

            {tareas.length > 0 ? tareas.map((tarea) => {
                  if(iconoChange){
                    return <Tarea
                    key={Tarea.id}
                    tarea={tarea} 
                    toggleCompletada={toggleCompletada }
                    iconoChange={iconoChange} 
                    cambiarChange={cambiarChange}
                    editarTarea={editarTarea}
                    borrarTarea={borrarTarea}
                    />
                    
                }else if(!tarea.completada){
                    return <Tarea
                    key={Tarea.id}
                    tarea={tarea} 
                    toggleCompletada={toggleCompletada }
                    iconoChange={iconoChange} 
                    cambiarChange={cambiarChange}
                    editarTarea={editarTarea}
                    borrarTarea={borrarTarea}
                    />
                }
                return;

            })
            :<div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default ListaTareas;