// src/components/DrawerMenu.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius } from '../constants/colors';

const DrawerMenu = ({ navigation }: any) => {
  const menuItems = [
    { id: 'home', label: 'Home (Dashboard)', icon: '🏠', screen: 'Dashboard' },
    { id: 'loads', label: 'My Loads', icon: '📦', screen: 'MyLoads' },
    { id: 'earnings', label: 'Earnings & Settlements', icon: '💰', screen: 'Earnings' },
    { id: 'messages', label: 'Messages', icon: '💬', screen: 'Messages' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', screen: 'Notifications' },
    { id: 'compliance', label: 'Compliance Status', icon: '✅', screen: 'Compliance' },
    { id: 'support', label: 'Support / Help Center', icon: '❓', screen: 'Support' },
    { id: 'profile', label: 'Profile', icon: '👤', screen: 'Profile' },
    { id: 'settings', label: 'Settings', icon: '⚙️', screen: 'Settings' },
  ];

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />

      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedIcon}>✓</Text>
          </View>
        </View>
        <Text style={styles.userName}>Numan Zafar</Text>
        <Text style={styles.userEmail}>dumm@gmail.com</Text>
      </View>

      <View style={styles.darkModeToggle}>
        <Text style={styles.darkModeIcon}>🌙</Text>
        <Text style={styles.darkModeText}>Dark mode</Text>
        <View style={styles.toggle}>
          <View style={styles.toggleCircle} />
        </View>
      </View>

      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.screen)}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  header: {
    padding: Spacing.lg,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  profileSection: {
    position: 'relative',
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.primaryDark,
  },
  verifiedIcon: {
    fontSize: 12,
    color: Colors.white,
  },
  userName: {
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: Spacing.xs,
  },
  userEmail: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  darkModeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  darkModeIcon: {
    fontSize: 20,
    marginRight: Spacing.sm,
  },
  darkModeText: {
    flex: 1,
    fontSize: FontSizes.md,
    color: Colors.white,
    fontWeight: '500',
  },
  toggle: {
    width: 48,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 2,
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
  },
  menuContainer: {
    flex: 1,
    paddingVertical: Spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: Spacing.md,
  },
  menuText: {
    fontSize: FontSizes.md,
    color: Colors.white,
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
  },
  logoutIcon: {
    fontSize: 24,
    marginRight: Spacing.md,
  },
  logoutText: {
    fontSize: FontSizes.md,
    color: Colors.red,
    fontWeight: '600',
  },
});

export default DrawerMenu;