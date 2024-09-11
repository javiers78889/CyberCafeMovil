import React, { useEffect, useState } from 'react'
import { findAllUsers } from '../services/Users.js'
 const LoginValidation = (params) => {
    const UserLog = params
    const [listaUsuarios, setListaUsuarios] = useState([])

    const Consultar = async () => {
        const usuarios= await findAllUsers();


        return usuarios

    }


    useEffect(() => {

        const consulta=Consultar()
        setListaUsuarios(consulta)
    }, [])

    console.log(listaUsuarios)

    return ({

    })
}
