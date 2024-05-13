//en esta hoja van las practicas de mapeo

import React from "react"
import { useState } from "react"
import './primerComponente.css'
import { Formulario } from "./formulario"

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto ? '✔' : '❌'}
        </li>
    )
}



export const Mapeo = () => {
   

    let listadoDeTareas = [
        { id: 1,nombre: "Comida", visto: true },
        { id: 2,nombre: "Viajes", visto: true },
        { id: 3,nombre: "Trabajo", visto: false },
        { id: 4,nombre: "Emprendimientos", visto: true },
        { id: 5,nombre: "Terapias Holisticas", visto: true },
        { id: 6,nombre: "Cursos", visto: true },
        { id: 7,nombre: "Carreras", visto: false },
        { id: 8,nombre: "Frutas", visto: false },
        { id: 9,nombre: "Verduras", visto: true },
        { id: 10,nombre: "Helado", visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoDeTareas)
    
    const onAgregarTarea = (val) =>{
        
        if(val < 1) return //esto se pone para que no puedan mandar el formulario en blanco. A esto se lo llama VALIDACION
        const envio = {
            id: arreglo.length + 1,
            nombre: val,
            visto: true
       }   
       setArreglo([...arreglo, envio])
    }
    return (
        <>
            <h1>Seccion para la practica de mapeo.</h1>
            

                <Formulario agregarTarea = {onAgregarTarea}></Formulario> 
                
            <ol>
                {arreglo.map(item =>
                    <Items
                        key ={item.id}
                        nombre={item.nombre}
                        visto={item.visto}>
                    </Items>)}
            </ol>
            
        </>
    )
}