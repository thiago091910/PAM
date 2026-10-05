import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import {
  calcularMedia,
  verificarSituacao
} from '../functions/media';

const estudantes = [
  {
    id: '1',
    nome: 'Ana',
    nota1: 8,
    nota2: 9
  },
  {
    id: '2',
    nome: 'Carlos',
    nota1: 6,
    nota2: 7
  },
  {
    id: '3',
    nome: 'Beatriz',
    nota1: 9,
    nota2: 10
  },
  {
    id: '4',
    nome: 'Lucas',
    nota1: 5,
    nota2: 6
  },
  {
    id: '5',
    nome: 'Mariana',
    nota1: 7,
    nota2: 8
  },
  {
    id: '6',
    nome: 'João',
    nota1: 4,
    nota2: 5
  },
  {
    id: '7',
    nome: 'Julia',
    nota1: 8,
    nota2: 7
  },
  {
    id: '8',
    nome: 'Pedro',
    nota1: 6,
    nota2: 6
  }
];

export default function ListaEstudantes() {

  function renderEstudante({ item }) {

    const media = calcularMedia(
      item.nota1,
      item.nota2
    );

    const situacao = verificarSituacao(media);

    return (
      <View style={styles.card}>

        <Text style={styles.nome}>
          {item.nome}
        </Text>

        <Text>
          Nota 1: {item.nota1}
        </Text>

        <Text>
          Nota 2: {item.nota2}
        </Text>

        <Text style={styles.media}>
          Média: {media.toFixed(1)}
        </Text>

        <Text>
          Situação: {situacao}
        </Text>

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Estudantes
      </Text>

      <FlatList
        data={estudantes}
        keyExtractor={(item) => item.id}
        renderItem={renderEstudante}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  media: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 8,
  },
});