// src/screens/Notifications/NotificationsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../constants/colors';

const NotificationsScreen = ({ navigation }: any) => {
  const [_activeFilter, setActiveFilter] = useState('all');

  const notifications = {
    today: [
      {
        id: '1',
        type: 'Load Assignment',
        color: Colors.blue,
        message: 'New Load Assigned: Dallas → Denver,\nPickup 9 AM',
        time: '5 Min ago',
      },
      {
        id: '2',
        type: 'Payment',
        color: Colors.green,
        message: 'Payment $950 sent via ACH on Oct 22',
        time: '5 Min ago',
      },
      {
        id: '3',
        type: 'Compliance',
        color: Colors.orange,
        message: 'Insurance Expiring in 5 Days — Upload New Document',
        time: '5 Min ago',
      },
    ],
    tomorrow: [
      {
        id: '4',
        type: 'Load Assignment',
        color: Colors.blue,
        message: 'New Load Assigned: Dallas → Denver,\nPickup 9 AM',
        time: '5 Min ago',
      },
    ],
  };

  const filters = [
    { id: 'promo', label: 'Promo', icon: 'pricetag-outline' },
    { id: 'order', label: 'Order', icon: 'calendar-outline' },
    { id: 'delivery', label: 'Delivery', icon: 'truck-outline' },
  ];

  const renderNotificationCard = (notification: any) => (
    <TouchableOpacity key={notification.id} style={styles.notificationCard}>
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicatorDot, { backgroundColor: notification.color }]} />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationType}>{notification.type}</Text>
        </View>
        <Text style={styles.notificationTime}>{notification.time}</Text>
        <Text style={styles.notificationMessage}>{notification.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Design uses default status bar style usually, but lets match standard */}
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={styles.filterButton} // Design shows all buttons dark blue
            onPress={() => setActiveFilter(filter.id)}
          >
            <Icon name={filter.icon} size={16} color={Colors.white} />
            <Text style={styles.filterText}>{filter.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          {notifications.today.map(renderNotificationCard)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tomorrow</Text>
          {notifications.tomorrow.map(renderNotificationCard)}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Messages')}>
          <Text style={styles.navIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={[styles.navIcon, styles.navIconActive]}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Earnings')}>
          <Text style={styles.navIcon}>💳</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, // Light gray background for the screen
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.white,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.black,
  },
  placeholder: {
    width: 40,
  },
  filterContainer: {
    backgroundColor: Colors.background,
    maxHeight: 70, // Limit height
  },
  filterContent: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
    flexDirection: 'row',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primaryDark,
    gap: Spacing.xs,
  },
  filterText: {
    fontSize: FontSizes.sm,
    fontWeight: '500',
    color: Colors.white,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingTop: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.black, // "Today", "Tomorrow" are bold black
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: Spacing.lg,
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderRadius: BorderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'flex-start',
  },
  indicatorContainer: {
    marginRight: Spacing.md,
    paddingTop: 4, // Align with text
  },
  indicatorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  notificationType: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.primaryDark,
  },
  notificationTime: {
    fontSize: FontSizes.xs,
    color: Colors.gray,
    marginBottom: 8,
  },
  notificationMessage: {
    fontSize: FontSizes.sm,
    color: Colors.darkGray,
    lineHeight: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: Spacing.sm,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.xs,
  },
  navItemActive: {
    opacity: 1,
  },
  navIcon: {
    fontSize: 24,
    opacity: 0.6,
  },
  navIconActive: {
    opacity: 1,
  },
});

export default NotificationsScreen;