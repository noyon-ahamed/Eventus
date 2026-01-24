// src/components/DrawerMenu.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, FontSizes, Spacing } from '../constants/colors';

const DrawerMenu = ({ navigation }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home (Dashboard)', icon: 'home-outline', screen: 'Dashboard' },
    { id: 'loads', label: 'My Loads', icon: 'cube-outline', screen: 'MyLoads' },
    { id: 'earnings', label: 'Earnings & Settlements', icon: 'cash-outline', screen: 'Earnings' },
    { id: 'messages', label: 'Messages', icon: 'chatbubble-ellipses-outline', screen: 'Messages' },
    { id: 'notifications', label: 'Notifications', icon: 'notifications-outline', screen: 'Notifications' },
    { id: 'compliance', label: 'Compliance Status', icon: 'shield-checkmark-outline', screen: 'Compliance' },
    { id: 'support', label: 'Support / Help Center', icon: 'help-circle-outline', screen: 'Support' },
    { id: 'profile', label: 'Profile', icon: 'person-outline', screen: 'Profile' },
    { id: 'settings', label: 'Settings', icon: 'settings-outline', screen: 'Settings' },
  ];

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.headerContent}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?u=numan' }} // Placeholder image
              style={styles.avatar}
            />
            <View style={styles.verifiedBadge}>
              <Icon name="checkmark" size={12} color={Colors.white} />
            </View>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Numan Zafar</Text>
            <Text style={styles.userEmail}>dumm@gmail.com</Text>
          </View>
        </View>
      </SafeAreaView>

      {/* Menu Section */}
      <View style={styles.menuWrapper}>
        <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
          {/* Dark Mode Toggle */}
          <View style={styles.menuItem}>
            <Icon name="moon-outline" size={24} color={Colors.black} style={styles.menuIcon} />
            <Text style={styles.menuText}>Dark mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: Colors.lightGray, true: Colors.primary }}
              thumbColor={Colors.white}
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
            />
          </View>

          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleNavigation(item.screen)}
            >
              <Icon name={item.icon} size={24} color={Colors.black} style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logout')}>
            <Icon name="log-out-outline" size={24} color={Colors.red} style={styles.menuIcon} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark, // Header background
  },
  headerSafeArea: {
    backgroundColor: Colors.primaryDark,
  },
  headerContent: {
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileSection: {
    position: 'relative',
    marginRight: Spacing.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.gray,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.primaryDark,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  menuWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 0, // Design doesn't seem to have curved top corners for the sheet, looks straight
  },
  menuContainer: {
    flex: 1,
    paddingVertical: Spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  menuIcon: {
    marginRight: Spacing.md,
    width: 24, // Fixed width for alignment
    textAlign: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: FontSizes.md,
    color: Colors.black,
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  logoutText: {
    fontSize: FontSizes.md,
    color: Colors.red,
    fontWeight: '500',
  },
});

export default DrawerMenu;