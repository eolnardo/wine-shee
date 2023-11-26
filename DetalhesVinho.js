import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetalhesVinho = ({ route }) => {
  const { vinho } = route.params;
  const navigation = useNavigation();

  const handleCompra = () => {
    const carrinho = [vinho];
    navigation.navigate('Carrinho', { carrinho });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imagemVinho} source={{ uri: `${vinho.thumbnail.path}.${vinho.thumbnail.extension}` }} />
      <Text style={styles.nome}>{vinho.nome}</Text>
      <Text style={styles.descricao}>{vinho.descricao}</Text>
      <Text style={styles.preco}>Preço: {vinho.preco}</Text>

      <TouchableOpacity style={styles.botaoCompra} onPress={handleCompra}>
        <Text style={styles.textoBotaoCompra}>Comprar</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 10,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagemVinho: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  botaoCompra: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotaoCompra: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DetalhesVinho;
