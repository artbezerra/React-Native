import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const tarefas = [
  {id: "1", descricao: "correr"},
  {id: "2", descricao: "pular"},
  {id: "3", descricao: "limpar"},
  {id: "4", descricao: "vender"},
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Renderizando os dados da lista de tarefas</Text>
        <View style={styles.container}>
        <Card>
          {tarefas.map(tarefas => (
            <View key={tarefas.id} style={styles.paragraph}>
              <Text>{tarefas.descricao}</Text>
            </View>
          ))}
          </Card>
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
});
