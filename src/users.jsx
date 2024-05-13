//en esta hoja van las practicas de fetch llamando a una api. web de la api:https://jsonplaceholder.typicode.com/users

import React from "react"
import { useState } from "react"
import './primerComponente.css'
import { UserList } from "./userList"


export const UsersApp = () => {   
    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        setEndPoint(`comments`)
    }
    
    return (
        <>
            <h1>Lista de Usuarios</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Llamar a la api</button>
        </>
    )
}