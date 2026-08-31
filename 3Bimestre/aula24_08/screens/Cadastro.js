import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

export default function Cadastro({ navigation }) {

  // Guarda o nome digitado pelo usuário
  const [nome, setNome] = useState('');

  // Guarda a primeira nota
  const [nota1, setNota1] = useState('');

  // Guarda a segunda nota
  const [nota2, setNota2] = useState('');

  // Função para enviar os dados para a próxima tela
  function enviarDados() {

    // Verifica se algum campo está vazio
    if (nome === '' || nota1 === '' || nota2 === '') {

      Alert.alert(
        'Atenção',
        'Preencha todos os campos!'
      );

      return;
    }

    // Transforma as notas em números
    const n1 = Number(nota1);
    const n2 = Number(nota2);

    // Verifica se as notas estão entre 0 e 10
    if (
      n1 < 0 ||
      n1 > 10 ||
      n2 < 0 ||
      n2 > 10
    ) {

      Alert.alert(
        'Erro',
        'Digite notas entre 0 e 10!'
      );

      return;
    }

    // Calcula a média
    const media = (n1 + n2) / 2;

    // Vai para a tela Resultado
    // levando os dados do usuário
    navigation.navigate('Resultado', {
      nome: nome,
      nota1: n1,
      nota2: n2,
      media: media
    });
  }


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Média Escolar
      </Text>

      <Text style={styles.subtitulo}>
        Preencha seus dados
      </Text>


      <Text style={styles.label}>
        Nome
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />


      <Text style={styles.label}>
        Primeira nota
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a primeira nota"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />


      <Text style={styles.label}>
        Segunda nota
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a segunda nota"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={enviarDados}
      >

        <Text style={styles.textoBotao}>
          Ver Resultado
        </Text>

      </TouchableOpacity>

    </View>
  );
}


// Estilos da tela
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F5FA',
    padding: 25,
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E3A5F',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 18,
    fontSize: 16
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
    marginTop: 10
  },

  textoBotao: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }

});