import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente} from './primerComponente'
import { Eventos } from './eventos'
import { Estados } from './estados'
import { Mapeo } from './mapeo'
import { useReducer } from 'react'
import './style.css'
import { Condicionales } from './condicionales'
import { UsersApp } from './users'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
    <PrimerComponente />
    <Eventos />
    <Estados value ={0} />
    <Condicionales />
    <Mapeo />
    
  </React.StrictMode>,
)
