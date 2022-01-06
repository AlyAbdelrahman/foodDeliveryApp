import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Resturant, OrderDelivery } from './screens';
import tabs from './navigation/tabs';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={tabs} />
        <Stack.Screen name='Resturant' component={Resturant} />
        <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
