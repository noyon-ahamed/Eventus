import React from 'react';

import { useAuth } from './AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from '../components/DrawerMenu';

const Drawer = createDrawerNavigator();

const DriverNavigator = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={DrawerMenu}
  >
    <Drawer.Screen name="DriverDashboard" component={DashboardScreen} />
    <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    <Drawer.Screen name="MyLoads" component={require('../screens/LoadDetail/LoadDetailScreen').default} />
    <Drawer.Screen name="Earnings" component={require('../screens/Earnings/EarningsScreen').default} />
    <Drawer.Screen name="Messages" component={DashboardScreen} />
    <Drawer.Screen name="Notifications" component={require('../screens/Notifications/NotificationsScreen').default} />
    <Drawer.Screen name="Compliance" component={DashboardScreen} />
    <Drawer.Screen name="Support" component={DashboardScreen} />
    <Drawer.Screen name="Profile" component={require('../screens/Profile/ProfileScreen').default} />
    <Drawer.Screen name="Settings" component={DashboardScreen} />
    {/* Hidden screens that should be accessible via navigation but not necessarily in drawer menu list explicitly if we control it via custom component */}
    <Drawer.Screen
      name="LoadDetail"
      component={require('../screens/LoadDetail/LoadDetailScreen').default}
      options={{ drawerItemStyle: { display: 'none' } }}
    />
    <Drawer.Screen
      name="TripStatus"
      component={require('../screens/TripStatus/TripStatusScreen').default}
      options={{ drawerItemStyle: { display: 'none' } }}
    />
    <Drawer.Screen
      name="UploadDocuments"
      component={require('../screens/UploadDocuments/UploadDocumentsScreen').default}
      options={{ drawerItemStyle: { display: 'none' } }}
    />
  </Drawer.Navigator>
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