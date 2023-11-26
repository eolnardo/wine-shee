import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Carrinho = ({ route }) => {
  const { carrinho } = route.params;
  const navigation = useNavigation();

  const handleFinalizarCompra = () => {
    navigation.navigate('FinalizarCompra', { carrinho });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>
      {carrinho.length > 0 ? (
        <FlatList
          data={carrinho}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemCarrinho}>
              <Image style={styles.imagemItem} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
              <View>
                <Text>{item.nome}</Text>
                <Text>{item.preco}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.vazio}>Seu carrinho está vazio</Text>
      )}

      {carrinho.length > 0 && (
        <Button title="Finalizar Compra" onPress={handleFinalizarCompra} />
      )}
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
  itemCarrinho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  vazio: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  imagemItem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default Carrinho;
