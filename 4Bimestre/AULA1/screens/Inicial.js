import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Média Escolar
      </Text>

      <Text style={styles.subtitulo}>
        Sistema para calcular e consultar
        as médias dos estudantes.
      </Text>

      <View style={styles.botao}>
        <Button
          title="Calcular Média"
          onPress={() => navigation.navigate('CalcularMedia')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Ver Estudantes"
          onPress={() => navigation.navigate('ListaEstudantes')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 30,
  },

  botao: {
    marginVertical: 8,
  },
});