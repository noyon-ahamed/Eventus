import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/Splash_Screen/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen/OnboardingScreen';
import LoginPage from './screens/Auth/login_page';
import SignupPage from './screens/Auth/signup_page';
import ForgotPasswordPage from './screens/Auth/forgot_password.jsx';
import ForgotPasswordCodePage from './screens/Auth/forgot_password_code';
import ResetPasswordPage from './screens/Auth/reset_password.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignupPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
        <Stack.Screen name="ForgotPasswordCode" component={ForgotPasswordCodePage} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;