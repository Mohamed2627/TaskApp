/* eslint-disable prettier/prettier */
import React from 'react';
import BottomTabs from './src/navigation/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/state/store';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'AppContainer'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AppContainer" component={BottomTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
