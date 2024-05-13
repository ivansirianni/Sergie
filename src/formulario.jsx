//en esta hoja van las practicas de formulario
// El componente Mapeo me va a pasar propiedades para que pueda agregar cosas a la lista que tienen en ese componente, pero a traves de este formulario hijo

import React from "react"
import { useState } from "react"
import './primerComponente.css'


export const Formulario = ({ agregarTarea }) => {
    const [value, setValue] = useState(``)
    const onImputChange = (event) => {
        
        setValue(event.target.value) //toma lo que viene del evento y lo ca guardando en el estado   
    }
    const onSubmit = (event) =>{         
        
        event.preventDefault() //para que no se actualice la pag.
        agregarTarea(value)
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresa nueva tarea"
                value={value}
                onChange={onImputChange}
            />
        </form>
    )
}