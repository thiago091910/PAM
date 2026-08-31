import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default function Resultado({ route, navigation }) {

  // Recebe os dados enviados pela tela Cadastro
  const {
    nome,
    nota1,
    nota2,
    media
  } = route.params;


  // Verifica a situação do aluno
  let situacao;

  if (media >= 6) {
    situacao = 'APROVADO';
  } else {
    situacao = 'REPROVADO';
  }


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Resultado
      </Text>


      <View style={styles.caixa}>

        <Text style={styles.nome}>
          {nome}
        </Text>


        <Text style={styles.texto}>
          Primeira nota: {nota1}
        </Text>


        <Text style={styles.texto}>
          Segunda nota: {nota2}
        </Text>


        <Text style={styles.media}>
          Média: {media.toFixed(1)}
        </Text>


        <Text style={styles.situacao}>
          {situacao}
        </Text>

      </View>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.textoBotao}>
          Calcular Novamente
        </Text>

      </TouchableOpacity>

    </View>
  );
}


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
    color: '#1E3A5F'
  },

  caixa: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 12,
    marginVertical: 25
  },

  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E3A5F',
    marginBottom: 20
  },

  texto: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333'
  },

  media: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },

  situacao: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: '#2563EB'
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8
  },

  textoBotao: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }

});