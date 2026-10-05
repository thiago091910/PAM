import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

import {
  calcularMedia,
  verificarSituacao
} from '../functions/media';

export default function CalcularMedia() {

  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcular() {

    const n1 = Number(nota1);
    const n2 = Number(nota2);

    const media = calcularMedia(n1, n2);
    const situacao = verificarSituacao(media);

    setResultado({
      media: media,
      situacao: situacao
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calcular Média
      </Text>

      <Text style={styles.label}>
        Nota 1
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a primeira nota"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />

      <Text style={styles.label}>
        Nota 2
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a segunda nota"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />

      <Button
        title="Calcular"
        onPress={calcular}
      />

      {resultado && (
        <View style={styles.resultado}>

          <Text style={styles.media}>
            Média: {resultado.media.toFixed(1)}
          </Text>

          <Text style={styles.situacao}>
            Situação: {resultado.situacao}
          </Text>

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  resultado: {
    marginTop: 30,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
  },

  media: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  situacao: {
    fontSize: 18,
  },
});