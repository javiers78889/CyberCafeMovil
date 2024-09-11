
import { useEffect, useState } from 'react';
import { Portada } from './src/components/Portada.js'
import { Login } from './src/components/Login.js';
import { findAllUsers } from './src/services/Users.js';
import { Profile } from './src/components/Profile.js';
import { findAllPaquetes } from './src/services/Paquetes.js';


export default function App() {

  const [portad, setPortad] = useState(true)
  const [listaUsuarios, setListaUsuarios] = useState([])
  const [sessionUser, setSessionUser] = useState([])
  const [autenticado, setAutenticado] = useState(false)
  const [alerta, setAlerta] = useState(false)

  const [paqueteria, setPaqueteria] = useState([])
  const paquetes = async () => {
    const coleccion = await findAllPaquetes()
    setPaqueteria(coleccion)
  }


  const consulta = async () => {
    const Usuarios = await findAllUsers()
    setListaUsuarios(Usuarios)

  }

  useEffect(() => {

    consulta()
    paquetes()
    setTimeout(() => {

      setPortad(false)

    }, 8000);
  }, [])

  const LoginValidation = (params) => {

    const UserLog = params

    const validacion = listaUsuarios.filter(user => user.usuario === params.usuario && user.contraseña === params.password)


    if (validacion != '') {
      setAutenticado(true)
      setAlerta(false)
      setSessionUser(validacion)
    }
    else {
      setAlerta(true)
    }

  }

  const Deslogueo = () => {
    setAutenticado(false)
  }



  return (

    <>
      {autenticado ? (
        <Profile Deslogueo={Deslogueo} paqueteria={paqueteria} sessionUser={sessionUser} />


      ) : (
        portad ? (<Portada />) : (<Login LoginValidation={LoginValidation} alerta={alerta} />)

      )}



    </>




  );
}

