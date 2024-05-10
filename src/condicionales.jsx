import React from "react"
import './primerComponente.css'

const Items = ({nombre, visto}) => {
    return(
        <li>
            {nombre } 
            {visto ? '✔' : '❌'}
        </li>
    )
}

export const Condicionales = () => {    

    return (
        <>         
           <h1>Seccion condicionales ternarios</h1>
           <h3>Listado de cosas</h3>
           <ol>
            <Items nombre ="Comida" visto={true}></Items>
            <Items nombre ="Viajes" visto={true}></Items>
            <Items nombre ="Trabajo" visto={false}></Items>
            <Items nombre ="Emprendimientos" visto={true}></Items>
            <Items nombre ="Terapias Holisticas" visto={true}></Items>
            <Items nombre ="Cursos" visto={true}></Items>
            <Items nombre ="Carreras" visto={false}></Items>
            <Items nombre ="Frutas" visto={false}></Items>
            <Items nombre ="Verduras" visto={true}></Items>
            <Items nombre ="Helado" visto={false}></Items>
           </ol>
        </>
    )
}