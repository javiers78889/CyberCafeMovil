import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../estilos/estilos.js'
import { LinearGradient } from 'expo-linear-gradient'
import { buttons } from '../estilos/buttons.js'
import { Button, DataTable, IconButton, MD3Colors } from 'react-native-paper'
import { Buttons } from './botones/Buttons.js'
import { Home } from './opciones/Home.js'
import imagen from '../img/fete.png'
import { Paquetes } from './opciones/Paquetes.js'
import { Direcciones } from './opciones/Direcciones.js'
import { Saludo } from './Saludo.js'
import { findAllPaquetes } from '../services/Paquetes.js'


export const Profile = ({ Deslogueo,sessionUser,paqueteria }) => {
    const [modal, setModal] = useState('perfil')
    const cambio = (param) => {
        setModal(param)

    }
 
   
    return (
        <LinearGradient
            colors={['#E21D1D', '#000000', '#000000']} // Amarillo, gris, negro
            style={styles.contenedor}
            start={{ x: 1, y: 0 }} // Punto de inicio del gradiente
            end={{ x: 1, y: 1.2 }} // Punto final del gradiente
        >

            <Saludo/>

            <Buttons Deslogueo={Deslogueo} cambio={cambio} />
            <View style={buttons.container}>
                <Home sessionUser={sessionUser} />
                {
                    modal === 'perfil'
                        ? <Image style={styles.image} source={imagen} />          // Renderiza el componente "Perfil"
                        : modal === 'paquetes'
                            ? <Paquetes sessionUser={sessionUser} paqueteria={paqueteria}/>        // Renderiza el componente "Paquetes"
                            : modal === 'direcciones'
                                ? <Direcciones />     // Renderiza el componente "Direcciones"
                                : null                           // O alguna otra acción por defecto si no hay coincidencia
                }


            </View>


        </LinearGradient>
    )
}
