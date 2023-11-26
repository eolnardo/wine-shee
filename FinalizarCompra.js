import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';

const FinalizarCompra = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');

  const { carrinho } = route.params;

  const handleFinalizarCompra = () => {
    // Aqui você pode implementar a lógica de processamento da compra
    // Pode enviar os dados para um servidor, processar pagamento, etc.
    // Neste exemplo, apenas exibiremos um alerta e navegaremos para a página de compra realizada

    Alert.alert('Compra Realizada', 'Sua compra foi realizada com sucesso!');
    navigation.navigate('CompraRealizada');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Finalizar Compra</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço para Envio"
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Forma de Pagamento"
        value={formaPagamento}
        onChangeText={(text) => setFormaPagamento(text)}
      />

      <Button title="Finalizar" onPress={handleFinalizarCompra} />
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default FinalizarCompra;
