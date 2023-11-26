import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './TelaInicial';
import TelaPesquisa from './TelaPesquisa';
import DetalhesVinho from './DetalhesVinho';
import Carrinho from './Carrinho';
import FinalizarCompra from './FinalizarCompra';
import CompraRealizada from './CompraRealizada';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaPesquisa" component={TelaPesquisa} />
        <Stack.Screen name="DetalhesVinho" component={DetalhesVinho} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="FinalizarCompra" component={FinalizarCompra} />
        <Stack.Screen name="CompraRealizada" component={CompraRealizada} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
