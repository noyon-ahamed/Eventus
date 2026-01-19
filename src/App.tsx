import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    // 1. Safe Area Provider handles notches/dynamic islands
    <SafeAreaProvider>
      
      {/* 2. Status Bar configuration (Light content for dark backgrounds) */}
      <StatusBar barStyle="light-content" backgroundColor="#0D1F2D" />

      {/* 3. Navigation Container (Similar to MaterialApp in Flutter) */}
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      
    </SafeAreaProvider>
  );
};

export default App;