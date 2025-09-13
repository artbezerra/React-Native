import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import StatusOperacao from './components/StatusOperacao'
// or any files within the Snack
export default function App() {
  return (
    <View style={styles.container}>
      <StatusOperacao tipo='sucesso'/>
      <StatusOperacao tipo='falha'/>
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
