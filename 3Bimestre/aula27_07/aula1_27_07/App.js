import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  Button 
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <ScrollView>

        <Text style={styles.titulo}>
          🌱 Mundo das Plantas
        </Text>

        <Text style={styles.subtitulo}>
          Conheça algumas plantas e seus benefícios
        </Text>


        <View style={styles.card}>

          <Image
            style={styles.imagem}
            source={{
              uri: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e'
            }}
          />

          <Text style={styles.nome}>
            Samambaia
          </Text>

          <Text style={styles.texto}>
            Planta ornamental muito utilizada em casas.
            Ajuda na decoração e deixa o ambiente mais agradável.
          </Text>

          <Button
            title="Saiba mais"
            onPress={() => alert("A samambaia gosta de ambientes úmidos!")}
          />

        </View>


        <View style={styles.card}>

          <Image
            style={styles.imagem}
            source={{
              uri: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'
            }}
          />

          <Text style={styles.nome}>
            Girassol
          </Text>

          <Text style={styles.texto}>
            Planta conhecida pela sua beleza e pela capacidade
            de acompanhar a luz do sol.
          </Text>

          <Button
            title="Saiba mais"
            onPress={() => alert("O girassol representa alegria!")}
          />

        </View>


        <View style={styles.card}>

          <Image
            style={styles.imagem}
            source={{
              uri: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85'
            }}
          />

          <Text style={styles.nome}>
            Cacto
          </Text>

          <Text style={styles.texto}>
            Planta resistente que necessita de pouca água
            e é fácil de cuidar.
          </Text>

          <Button
            title="Saiba mais"
            onPress={() => alert("O cacto armazena água em seu interior!")}
          />

        </View>


      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    paddingTop: 40,
  },


  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 10,
  },


  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },


  card: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 15,
    borderRadius: 15,
    elevation: 5,
  },


  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },


  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 5,
  },


  texto: {
    fontSize: 15,
    color: '#444',
    marginBottom: 15,
  },

});