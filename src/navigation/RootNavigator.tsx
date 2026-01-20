import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';

// Import your screens here
import { DispatchDashboard } from '../features/dispatch/components/screens/DispatchDashboard';
// Create a temporary Login screen if you don't have one yet to test routing
import { View, Text, Button } from 'react-native';

// --- Temporary Mock Screens (Delete these later) ---
const LoginScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Login Screen</Text>
    <Button title="Login as Admin" onPress={() => navigation.replace(ROUTES.DISPATCH_DASHBOARD)} />
  </View>
);
// --------------------------------------------------

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  // In a real app, you would check your Zustand store here:
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isAuthenticated = false; // Toggle this to test different start screens manually

  return (
    <Stack.Navigator 
      initialRouteName={isAuthenticated ? ROUTES.DISPATCH_DASHBOARD : ROUTES.LOGIN}
      screenOptions={{ headerShown: false }} // Hides the default top bar
    >
      {/* Define your routes just like Flutter's route table */}
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.DISPATCH_DASHBOARD} component={DispatchDashboard} />
      
    </Stack.Navigator>
  );
};