import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Noyon</Text>
      <Text style={styles.sub}>My First React Native App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  sub: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
  },
});
