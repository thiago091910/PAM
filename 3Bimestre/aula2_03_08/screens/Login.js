import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet
} from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Bem-vindo!
      </Text>

      <Text style={styles.subtitulo}>
        Entre na sua conta para continuar
      </Text>

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
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
    backgroundColor: '#f2f2f2',
  },

  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },

  label: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});