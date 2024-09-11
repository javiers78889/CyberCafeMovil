import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import fastImage from '../img/fete-blanco.png'
import { styles } from '../estilos/estilos';
export const Portada = () => {
    const [loading, setLoading] = useState(false)
    const[loadLogueo,setLoadLogueo]=useState(false)
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(true)
      }, 3000)
  
    }, [])
    return (
        <View style={styles.container}>
            <Image source={fastImage} style={styles.image} />
            {loading ? (<ActivityIndicator size="large" color="#FFFF" />) : ('')}

           

        </View>
    )
}
