//en esta hoja irá lo relacionado a practica de eventos.
import React from "react"
import './primerComponente.css'


export const Eventos = ({value}) => {

    function handleClick() {
        console.log("Este es solo 1 argumento")        
    }

    function handleClick2(event, otroEvento) {
        console.log(event)
        console.log(otroEvento)
    }

   
    return (
        <>
            <h1>Eventos - App de contador</h1>
            <button onClick = {handleClick}>
                Boton con 1 Argumento en el evento
            </button>
                <p>{value}</p>
            <button onClick={(event => handleClick2(event, 'Otro argumento'))}>
                Boton con + de 1 argumento en e evento
            </button>
            
        </>
    )
}
Eventos.defaultProps = {
}