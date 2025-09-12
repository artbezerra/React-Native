import { Text, View, StyleSheet, Image } from 'react-native';

const Produto = (props) => {
  return (
    <View>
      <Text style={styles.paragraph}> nome do produto: {props.nome}</Text>
      <Text style={styles.paragraph}> preco do produto: R$ {props.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});

export default Produto;