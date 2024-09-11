import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../estilos/estilos';
import { LinearGradient } from 'expo-linear-gradient';
import fastImage from '../img/fete-blanco.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import { LoginValidation } from '../validation/LoginValidation';

const initalCredential = {
    'usuario': '',
    'password': '',
}

export const Login = ({ LoginValidation, alerta }) => {
    const [credential, setCredential] = useState(initalCredential)
    const { usuario, password } = credential

    const Leer = (name, value) => {
        setCredential({ ...credential, [name]: value })
    }

    const Enviar = () => {
        LoginValidation(credential)
    }


    return (
        <LinearGradient
            colors={['#E21D1D', '#000000', '#000000']} // Amarillo, gris, negro
            style={styles.container}
            start={{ x: 1, y: 0 }} // Punto de inicio del gradiente
            end={{ x: 1, y: 1.2 }} // Punto final del gradiente
        >
            <Image source={fastImage} style={styles.image} />

            {/* Input para usuario */}
            <View style={styles.textos}>
                <View style={styles.icon}>
                    <AntDesign name="user" size={20} color="black" />
                </View>
                <TextInput
                    style={styles.input}
                    value={usuario}
                    onChangeText={(text) => Leer('usuario', text)}
                    placeholder="User"
                />
            </View>

            {/* Input para contraseña */}
            <View style={styles.textos}>
                <View style={styles.icon}>
                    <AntDesign name="lock" size={20} color="black" />
                </View>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => Leer('password', text)}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            {alerta ? (<Text style={styles.alerta}>Credenciales Incorrectas</Text>) : ''}

            {/* Botón de Login */}
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.roundButton} onPress={Enviar}>
                    <Text style={styles.buttonText}>
                        Login <AntDesign name="login" size={20} color="black" />
                    </Text>
                </TouchableOpacity>

                <Text style={styles.buttonContacto}>
                    Contacto <AntDesign name="contacts" size={15} color="white" />
                </Text>
            </View>

            <Text style={styles.footer}>
                © CyberCafe Chame - Todos los Derechos Reservados.
            </Text>
        </LinearGradient>
    );
};
