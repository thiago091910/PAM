import { View, Text, Button, StyleSheet } from 'react-native';

export default function Teste({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Tela de Teste
      </Text>

      <Text style={styles.texto}>
        Se você está vendo essa tela, a navegação está funcionando!
      </Text>

      <View style={styles.botao}>
        <Button
          title="Voltar para Home"
          onPress={() => navigation.navigate('Home')}
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

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  texto: {
    fontSize: 17,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },

  botao: {
    width: '80%',
    marginTop: 10,
  },
});