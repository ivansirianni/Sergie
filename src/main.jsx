import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente} from './primerComponente'
import { Eventos } from './eventos'
import { Estados } from './estados'
import './style.css'
import { Condicionales } from './condicionales'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente />
    <Eventos />
    <Estados value ={0} />
    <Condicionales />
  </React.StrictMode>,
)
