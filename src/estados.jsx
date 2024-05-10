//en esta hoja van las practicas de estados

import React from "react"
import { useState } from "react"
import './primerComponente.css'

export const Estados = ({value}) => {
    const [contador, setContador] = useState (value)

    const Suma  = () => {        
            setContador(contador + 1)
    }
    const Resta  = () => {        
        setContador(contador - 1)
}
    return (
        <>         
            <h1>Contador usando Estados</h1>
            <button onClick={() => Suma()}>+</button>
            <button onClick={() => Resta()}>-</button>
            <h4>El num del contador es {contador}</h4>            
        </>
    )
}
