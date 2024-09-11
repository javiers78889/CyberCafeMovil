import React from 'react'
import { Image, Text, View } from 'react-native';
import { styles } from '../estilos/estilos';
import fastImage from '../img/fete-blanco.png'

export const Saludo = () => {
    const currentHour24 = new Date().getHours();

    // Convierte la hora de 24 horas a 12 horas
    const isAM = currentHour24 < 12;
    const currentHour12 = currentHour24 % 12 || 12; // 12:00 AM/PM para 0 horas

    // Determina el mensaje según la hora del día
    let greetingMessage;
    if (currentHour24 >= 0 && currentHour24 < 12) {
        greetingMessage = 'Buenos días';
    } else if (currentHour24 >= 12 && currentHour24 < 18) {
        greetingMessage = 'Buenas tardes';
    } else {
        greetingMessage = 'Buenas noches';
    }
    return (
        <View style={styles.header}>

            <Image source={fastImage} style={styles.imagenes} />
            <Text style={styles.saludo}>
                {greetingMessage} !
            </Text>

        </View>
    )
}
