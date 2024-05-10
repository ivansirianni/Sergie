import React from "react"
import './primerComponente.css'


export const PrimerComponente = ({Titulo, subtitulo, edad, pais}) => {
  return ( 
        <> 
            <h1>{Titulo}</h1>
            <h2>{subtitulo}</h2>
            <h3>{edad}</h3>
            <h4>{pais}</h4>
        </>
)
}
//Cuando tengo que poner + de un elemento, es decir 2 divs por ejemplo o 2 parrafo, no se usa mas DIV, se usa <> </> que son etiquetas fragments, para que no queden muchos divs dentro de divs.

//cuando paso prop, en este caso {Titulo} es como pasar un objeto. Esta prop titulo se lo tengo que poner al componente en el main.jsx -- Ej: <PrimerComponente Titulo ='Esta es la prop' /> o sino usar la forma de abajo todo en esta pagina (es mas comodo)

PrimerComponente.defaultProps ={
    Titulo: 'practica de componentes',
    subtitulo: "Sección Subtitulo",
    edad: 'sección edad',
    pais: 'seccion pais'
} // utilizo esta forma para mandar opciones por defecto y luego se si me falta llamar alguna prop del main. Sino, uso la forma que puse arriba en el codigo
