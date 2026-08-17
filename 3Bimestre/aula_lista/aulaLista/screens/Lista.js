import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Lista() {

  const produtos = [
    { id: '1', nome: 'Arroz' },
    { id: '2', nome: 'Feijão' },
    { id: '3', nome: 'Macarrão' },
    { id: '4', nome: 'Molho de tomate' },
    { id: '5', nome: 'Farinha de trigo' },
    { id: '6', nome: 'Açúcar' },
    { id: '7', nome: 'Sal' },
    { id: '8', nome: 'Café' },
    { id: '9', nome: 'Leite' },
    { id: '10', nome: 'Achocolatado' },
    { id: '11', nome: 'Pão' },
    { id: '12', nome: 'Manteiga' },
    { id: '13', nome: 'Queijo' },
    { id: '14', nome: 'Presunto' },
    { id: '15', nome: 'Ovos' },
    { id: '16', nome: 'Frango' },
    { id: '17', nome: 'Carne' },
    { id: '18', nome: 'Salsicha' },
    { id: '19', nome: 'Batata' },
    { id: '20', nome: 'Cebola' },
    { id: '21', nome: 'Tomate' },
    { id: '22', nome: 'Alface' },
    { id: '23', nome: 'Banana' },
    { id: '24', nome: 'Maçã' },
    { id: '25', nome: 'Laranja' },
    { id: '26', nome: 'Biscoito' },
    { id: '27', nome: 'Chocolate' },
    { id: '28', nome: 'Refrigerante' },
    { id: '29', nome: 'Suco' },
    { id: '30', nome: 'Água mineral' },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🛒 Lista de Compras
      </Text>

      <Text style={styles.subtitulo}>
        30 itens para comprar
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <View style={styles.item}>

            <Text style={styles.numero}>
              {item.id}.
            </Text>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },

  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 8,
    borderRadius: 10,
  },

  numero: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2E7D32',
    width: 35,
  },

  nome: {
    fontSize: 17,
    color: '#333',
  },
});