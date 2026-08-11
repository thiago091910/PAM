import { View, Text, Button, StyleSheet } from 'react-native';

export default function Teste({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Tela de Teste
      </Text>

      <Text style={styles.texto}>
        A navegação está funcionando!
      </Text>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
    marginBottom: 30,
  },

  espaco: {
    height: 15,
  },
});