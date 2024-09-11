import React from 'react'
import { View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { buttons } from '../../estilos/buttons'

export const Home = ({sessionUser}) => {
    return (
       
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Usuario </DataTable.Title>
                    <DataTable.Title>Nombre </DataTable.Title>
                    <DataTable.Title>Paquetes Recibidos </DataTable.Title>
                    <DataTable.Title>Plan</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>{sessionUser[0].usuario}</DataTable.Cell>
                    <DataTable.Cell>{sessionUser[0].nombre}</DataTable.Cell>
                    <DataTable.Cell>5 </DataTable.Cell>
                    <DataTable.Cell>{sessionUser[0].plan}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
    
    )
}
