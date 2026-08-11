import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Bem-vindo ao nosso aplicativo!
      </Text>

      <Text style={styles.texto}>
        Esta é a tela inicial.
      </Text>

      <Button
        title="Ir para Tela de Teste"
        onPress={() => navigation.navigate('Teste')}
      />

      <View style={styles.espaco} />

      <Button
        title="Voltar para Login"
        onPress={() => navigation.navigate('Login')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  texto: {
    fontSize: 18,
    marginBottom: 30,
  },

  espaco: {
    height: 15,
  },
});