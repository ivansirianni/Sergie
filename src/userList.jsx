import { useState, useEffect } from "react"


export const UserList = ({ endPoint }) => {
    const [data, setData] = useState([]) // para mantener el estado de usuarios   


    // fetch para llamar la data y traer la info del json
    const fetchdata = async () => {
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            setData(data)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [endPoint])
    
    return (
        <>
            <ul>
                {endPoint == 'users' ? data.map(i => <li key = {i.id}> {i.name} </li>) : data.map(i => <li key = {i.id}>{i.body}</li>)}              
                
            </ul>
        </>
    )
}
