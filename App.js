/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/state/store';
import Root from './src/navigation/Root';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </SafeAreaProvider>
  );
}
