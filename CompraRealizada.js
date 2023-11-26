import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CompraRealizada = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Compra Realizada com Sucesso!</Text>
      <Text style={styles.mensagem}>Obrigado por escolher nossos produtos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mensagem: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CompraRealizada;
