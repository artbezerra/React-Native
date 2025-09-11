import { StyleSheet, Text, View, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const nome = "Arthur";
  const profissao = "Estudante de SI";
  const foto = require('./assets/file.jpg');
  return (
  <View style={styles.container}>
    <View style={styles.cartao}>
      <Image
        source={foto}
        style={{ width: 100, height: 100, marginBottom: 15, borderRadius: 50,}}
      />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
    </View>
  </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cartao: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profissao: {
    color: 'gray',
  },
});
