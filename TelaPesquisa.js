import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Image, Pressable, Alert, TextInput } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ADEGA = [
  {
    id: 1009220,
    nome: "PIZZATO CERCHIO Cabernet Sauvignon 750ML - VINHO FINO TINTO SECO",
    descricao:
      "O Vinho Chileno CASILLERO DEL DIABLO é o rótulo de vinho mais conhecido do Brasil, e o vinho chileno mais famoso do mundo. Tem como origem o Vale Central, no Chile, e em 2023 foi eleito pela 5ª vez consecutiva a segunda marca de vinho mais poderosa do mundo e a primeira da América Latina. O vinho RESERVA PRIVADA CABERNET SAUVIGNON apresenta delicadas notas de cereja vermelha, ameixa e elegantes notas de groselha-preta. Tem uma estrutura firme, apresenta taninos suaves e envolventes com um final longo e persistente. De vermelho rubi intenso e profundo, harmoniza com carnes vermelhas e queijos.",
    preco: "R$122,90",
    thumbnail: {
      path: "https://loja.pizzato.net/fotos/loja.pizzato.net/produtos/gd_x85u4f",
      extension: "jpg",
    },
  },
  {
    id: 1009220,
    nome: "PIZZATO CERCHIO Cabernet Sauvignon 750ML - VINHO FINO TINTO SECO",
    descricao:
      "O Vinho Chileno CASILLERO DEL DIABLO é o rótulo de vinho mais conhecido do Brasil, e o vinho chileno mais famoso do mundo. Tem como origem o Vale Central, no Chile, e em 2023 foi eleito pela 5ª vez consecutiva a segunda marca de vinho mais poderosa do mundo e a primeira da América Latina. O vinho RESERVA PRIVADA CABERNET SAUVIGNON apresenta delicadas notas de cereja vermelha, ameixa e elegantes notas de groselha-preta. Tem uma estrutura firme, apresenta taninos suaves e envolventes com um final longo e persistente. De vermelho rubi intenso e profundo, harmoniza com carnes vermelhas e queijos.",
    preco: "R$122,90",
    thumbnail: {
      path: "https://loja.pizzato.net/fotos/loja.pizzato.net/produtos/gd_x85u4f",
      extension: "jpg",
    },
  },
  {
    id: 1009220,
    nome: "PIZZATO gay Cabernet Sauvignon 750ML - VINHO FINO TINTO SECO",
    descricao:
      "O Vinho Chileno CASILLERO DEL DIABLO é o rótulo de vinho mais conhecido do Brasil, e o vinho chileno mais famoso do mundo. Tem como origem o Vale Central, no Chile, e em 2023 foi eleito pela 5ª vez consecutiva a segunda marca de vinho mais poderosa do mundo e a primeira da América Latina. O vinho RESERVA PRIVADA CABERNET SAUVIGNON apresenta delicadas notas de cereja vermelha, ameixa e elegantes notas de groselha-preta. Tem uma estrutura firme, apresenta taninos suaves e envolventes com um final longo e persistente. De vermelho rubi intenso e profundo, harmoniza com carnes vermelhas e queijos.",
    preco: "R$122,90",
    thumbnail: {
      path: "https://loja.pizzato.net/fotos/loja.pizzato.net/produtos/gd_x85u4f",
      extension: "jpg",
    },
  },
];

const VinhoCard = ({ item, onPress }) => (
  <Pressable onPress={() => onPress(item)}>
    <Card>
      <Image style={styles.imagemVinho} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
      <Card.Content>
        <Title>{item.nome}</Title>
        <Paragraph>Preço: {item.preco}</Paragraph>
      </Card.Content>
    </Card>
  </Pressable>
);

const TelaPesquisa = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(ADEGA);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const newData = ADEGA.filter((item) => {
      const itemData = `${item.nome.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    setFilteredData(newData);
  };

  const exibirDetalhes = (item) => {
    navigation.navigate('DetalhesVinho', { vinho: item });
  };

  const renderItem = ({ item }) => (
    <VinhoCard item={item} onPress={exibirDetalhes} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imagemVinho: {
    width: 100,
    height: 150,
    alignSelf: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default TelaPesquisa;