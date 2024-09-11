import React from 'react'
import { View, Text } from 'react-native'
import { Button, Icon, IconButton, MD3Colors } from 'react-native-paper'
import { styles } from '../../estilos/estilos'

export const Buttons = ({ Deslogueo, cambio }) => {
    return (

        <View style={styles.opciones}>

            <View style={styles.botons}>
                <IconButton
                    icon="home"
                    iconColor="#4B4B4B"
                    mode='contained-tonal'
                    style={styles.iconButton}
                    size={40}
                    onPress={() => cambio('perfil')}
                />
                <Text style={styles.buttonContacto}>Perfil</Text>
            </View>
            <View style={styles.botons}>
                <IconButton
                    icon="package"
                    iconColor="#4B4B4B"
                    mode='contained-tonal'
                    style={styles.iconButton}
                    size={40}
                    onPress={() => cambio('paquetes')}
                />
                <Text style={styles.buttonContacto}>Paquetes</Text>
            </View>
            <View style={styles.botons}>
                <IconButton
                    icon="map"
                    iconColor="#4B4B4B"
                    mode='contained-tonal'
                    style={styles.iconButton}
                    size={40}
                    onPress={() => cambio('direcciones')}
                />
                <Text style={styles.buttonContacto}>Direcciones</Text>
            </View>
            <View style={styles.botons}>
                <IconButton
                    icon="logout"
                    iconColor={MD3Colors.error50}
                    mode='contained-tonal'
                    size={40}
                    onPress={Deslogueo}
                />
                <Text style={styles.buttonContacto}>Salir</Text>
            </View>


        </View>



    )
}
