import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './navigation/AuthContext';
import { RootNavigator } from './navigation/RootNavigator';

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;