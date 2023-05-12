"use client"
import {useEffect, useState} from "react";



export interface User {
    id: number,
    name: string
    email: string
    phone: string
}
export default function Information({params} : {
 params:   {
     id: number
 }

}) {

    const [user, setUser] = useState<User>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setUser(response)
            } )

    }, [params.id])

    return (
        <div>
            <h1>User information!!!</h1>
            <text>Nome={user?.name}</text>
            <text>genero=M</text>
            <text>Data nascimento=Today</text>
            <text>Email: {user?.email}</text>
            <text>cpf: </text>
            <text>telefone: {user?.phone} </text>
            <text>cep: </text>
            <text>Endereço: </text>


            <button>Clique aqui para mudar sua senha</button>
        </div>

    )
}