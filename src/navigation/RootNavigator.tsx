import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; // You might need this wrapper at the very root (App.tsx)
import { ROUTES } from './routes';

// Import your screens here
import { DispatchDashboard } from '../features/dispatch/screens/DispatchDashboard';
import { LoadBoardScreen } from '../features/dispatch/screens/LoadBoardScreen'; 
import { AssignLoadScreen } from '../features/dispatch/screens/AssignLoadScreen'; // Import this (we will create it next)

// Temporary Login Screen
import { View, Text, Button } from 'react-native';
const LoginScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Login Screen</Text>
    <Button title="Login as Admin" onPress={() => navigation.replace(ROUTES.DISPATCH_DASHBOARD)} />
  </View>
);

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  // Set this to true to skip the login screen for now
  const isAuthenticated = true; 

  return (
    <Stack.Navigator 
      initialRouteName={isAuthenticated ? ROUTES.DISPATCH_DASHBOARD : ROUTES.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      {/* 1. Login */}
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      
      {/* 2. Dashboard */}
      <Stack.Screen name={ROUTES.DISPATCH_DASHBOARD} component={DispatchDashboard} />

      {/* 3. Load Board (THIS WAS MISSING) */}
      <Stack.Screen name={ROUTES.LOAD_BOARD} component={LoadBoardScreen} />
      <Stack.Screen name={ROUTES.ASSIGN_LOAD} component={AssignLoadScreen} />
      
    </Stack.Navigator>
  );
};