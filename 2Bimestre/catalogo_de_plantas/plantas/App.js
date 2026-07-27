import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <ScrollView style={styles.tunao}>
    <View>
      <Text>Catalogo de Plantas</Text>
    </View>

    <View>

      <Button
        onPress={() => { setIsHungry(false); }}
        title={'Babosa'}
      >
      </Button>

      <Button
        onPress={() => { setIsHungry(false); }}
        title={'Abacatero'}
      >
      </Button>

      <Button
        onPress={() => { setIsHungry(false); }}
        title={'Babosa'}
      >
      </Button>

    </View>
  </ScrollView>
}