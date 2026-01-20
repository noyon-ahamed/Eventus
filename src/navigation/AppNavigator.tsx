import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import { DispatchDashboard } from '../features/admin/screens/DispatchDashboard';
import { LoadBoardScreen } from '../features/admin/screens/LoadBoardScreen';
import { AssignLoadScreen } from '../features/admin/screens/AssignLoadScreen';
import { ActiveDriversScreen } from '../features/admin/screens/ActiveDriversScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.DISPATCH_DASHBOARD}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ROUTES.DISPATCH_DASHBOARD} component={DispatchDashboard} />
            <Stack.Screen name={ROUTES.LOAD_BOARD} component={LoadBoardScreen} />
            <Stack.Screen name={ROUTES.ASSIGN_LOAD} component={AssignLoadScreen} />
            <Stack.Screen name={ROUTES.ACTIVE_DRIVER} component={ActiveDriversScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
