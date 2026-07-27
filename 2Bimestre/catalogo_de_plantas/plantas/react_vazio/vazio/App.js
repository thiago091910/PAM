import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return(
    <ScrollView>
      <View style={styles.titulo}>
        <Text>Teste de tela</Text>
      </View>
    <ScrollView style={styles.cont_texto}>
      <Text>jtrfjrrtutr

      </Text>
      </ScrollView>
      <View>
        <TextInput style= {{height:40, borderColor: "blue", borderWidth: 2, width: 200,}}>

        </TextInput>
  
</View>
</ScrollView>
);
}

const styles = StyleSheet.create({
 titulo: {
  flex: 1,
  margintop:50,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign:'center',
 },
 cont_texto:{
  margintop:50,
  height:500,
  width:300,
  backgroundColor: "red",
  alignSelf: 'center',
 },
});