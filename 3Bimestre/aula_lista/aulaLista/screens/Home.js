import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>🛒</Text>

      <Text style={styles.titulo}>
        Lista de Compras
      </Text>

      <Text style={styles.subtitulo}>
        Organize suas compras de supermercado
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Lista')}
      >
        <Text style={styles.textoBotao}>
          Próximo →
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 20,
  },

  emoji: {
    fontSize: 70,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 17,
    color: '#555',
    textAlign: 'center',
    marginBottom: 35,
  },

  botao: {
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 10,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});