import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './src/navigator/Navigator';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      <Navigator />
    </NavigationContainer>
  )
}

export default App