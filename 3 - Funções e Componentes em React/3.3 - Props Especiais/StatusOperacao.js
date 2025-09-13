import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

function StatusOperacao({tipo}) {
  
  const verificaSucesso = tipo === 'sucesso';
  const statusTexto = verificaSucesso ? 'Operação bem-sucedida!' : 'Ocorreu uma falha.';
  const estiloTexto = verificaSucesso ? styles.sucesso : styles.falha;

  return(
    <View style={styles.statusContainer}>
      <p style={estiloTexto}>{statusTexto}</p>
    </View>
  );
}

const styles = StyleSheet.create({
  sucesso: {
    color: '#28a745', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  falha: {
    color: '#dc3545', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StatusOperacao;