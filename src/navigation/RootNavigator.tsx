import React from 'react';
import { useAuth } from './AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

export const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};