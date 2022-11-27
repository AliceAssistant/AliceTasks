/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaWrapper } from './src/components/atoms/SafeAreaWrapper';
import { RootNavigatior } from './src/navigation';
import { store } from './src/state';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaWrapper>
        <NavigationContainer>
          <RootNavigatior />
        </NavigationContainer>
      </SafeAreaWrapper>
    </Provider>
  );
};

export default App;
