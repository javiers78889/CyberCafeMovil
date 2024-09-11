import React from 'react'
import { Modal, Text } from 'react-native'
import { Avatar, Button, Card } from 'react-native-paper'
import cliente from '../../img/delivery.jpg'
import { styles } from '../../estilos/estilos'

export const Detalles = ({ detalles, activar,paquete }) => {
    const LeftContent = props => <Avatar.Icon {...props} icon="package" />
    return (
        <Modal visible={detalles}>
            <Card>
                <Card.Title title="Detalles de Pedido" subtitle={`Factura N ${paquete.id}`} left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Peso: {paquete.peso} (lb/Pie)</Text>
                    <Text variant="bodyMedium">Precio: ${paquete.precio}</Text>
                </Card.Content>
                <Card.Cover style={styles.deco} source={cliente} />
                <Card.Actions>
                <Button mode='contained-tonal' icon="cash" onPress={activar}>Pagar</Button>
                <Button mode='contained-tonal' icon="receipt" onPress={activar}>Factura</Button>
                </Card.Actions>
            </Card>
            <Button mode='contained-tonal' icon="logout" onPress={activar}>Volver</Button>
        </Modal>

    )
}
