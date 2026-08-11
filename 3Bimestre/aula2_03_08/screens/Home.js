import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Bem-vindo ao nosso aplicativo!
      </Text>

      <Text style={styles.texto}>
        Aqui você pode acessar todas as funções do aplicativo.
      </Text>

      <View style={styles.botao}>
        <Button
          title="Começar"
          onPress={() => {}}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Voltar para Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f2f2f2',
  },

  imagem: {
    width: 180,
    height: 180,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  texto: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },

  botao: {
    width: '80%',
    marginTop: 10,
  },
});