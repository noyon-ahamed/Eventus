import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';

const DriverStack = createNativeStackNavigator();

const DriverNavigator = () => (
  <DriverStack.Navigator screenOptions={{ headerShown: false }}>
    <DriverStack.Screen name="DriverDashboard" component={DashboardScreen} />
  </DriverStack.Navigator>
);

export const RootNavigator = () => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <AuthNavigator />;
  }

  if (userRole === 'Driver') {
    return <DriverNavigator />;
  }

  if (userRole === 'Admin') {
    return <AppNavigator />;
  }

  return <AuthNavigator />;
};