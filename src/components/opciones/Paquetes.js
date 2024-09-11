import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { findAllPaquetes } from '../../services/Paquetes'
import { List, MD3Colors } from 'react-native-paper'
import { Detalles } from './Detalles'

export const Paquetes = ({ sessionUser, paqueteria }) => {
  const [detalles, setDetalles] = useState(false)

  const activar = () => {
    setDetalles(true)
    if (detalles) {
      setDetalles(false)
    }
  }

  const usuario = sessionUser[0]

  return (
    <View>
      <ScrollView>
        {Array.isArray(paqueteria.data) && paqueteria.data
          .filter((u) => u.usuario === usuario.usuario)
          .map((paquete) => (
            <View key={paquete.id}>
              <TouchableOpacity onPress={activar}>
                <List.Section>

                  <List.Item title={paquete.tracking} right={() => <Text>    ${paquete.precio}</Text>} left={() => <List.Icon icon="package" />} />

                </List.Section>
              </TouchableOpacity>
              <Detalles detalles={detalles} activar={activar} paquete={paquete} />
            </View>
          ))}

      </ScrollView>

    </View>

  )
}
