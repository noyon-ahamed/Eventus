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
import { Colors, FontSizes, Spacing, BorderRadius } from '../../constants/colors';

const NotificationsScreen = ({ navigation }: any) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const notifications = {
    today: [
      {
        id: '1',
        type: 'Load Assignment',
        icon: '📦',
        color: Colors.blue,
        message: 'New Load Assigned: Dallas → Denver, Pickup 9 AM',
        time: '5 Min ago',
      },
      {
        id: '2',
        type: 'Payment',
        icon: '💰',
        color: Colors.green,
        message: 'Payment $950 sent via ACH on Oct 22',
        time: '5 Min ago',
      },
      {
        id: '3',
        type: 'Compliance',
        icon: '⚠️',
        color: Colors.yellow,
        message: 'Insurance Expiring in 5 Days — Upload New Document',
        time: '5 Min ago',
      },
    ],
    tomorrow: [
      {
        id: '4',
        type: 'Load Assignment',
        icon: '📦',
        color: Colors.blue,
        message: 'New Load Assigned: Dallas → Denver, Pickup 9 AM',
        time: '5 Min ago',
      },
    ],
  };

  const filters = [
    { id: 'all', label: 'All', icon: '🏷️' },
    { id: 'promo', label: 'Promo', icon: '🏷️' },
    { id: 'order', label: 'Order', icon: '📋' },
    { id: 'delivery', label: 'Delivery', icon: '🚚' },
  ];

  const renderNotificationCard = (notification: any) => (
    <TouchableOpacity key={notification.id} style={styles.notificationCard}>
      <View style={[styles.notificationIcon, { backgroundColor: notification.color + '20' }]}>
        <Text style={styles.iconText}>{notification.icon}</Text>
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationType}>{notification.type}</Text>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
        <Text style={styles.notificationMessage}>{notification.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
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
            style={[
              styles.filterButton,
              activeFilter === filter.id && styles.filterButtonActive,
            ]}
            onPress={() => setActiveFilter(filter.id)}
          >
            <Text style={styles.filterIcon}>{filter.icon}</Text>
            <Text
              style={[
                styles.filterText,
                activeFilter === filter.id && styles.filterTextActive,
              ]}
            >
              {filter.label}
            </Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: Colors.primaryDark,
  },
  headerTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  placeholder: {
    width: 40,
  },
  filterContainer: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  filterContent: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.lightGray,
    gap: Spacing.xs,
  },
  filterButtonActive: {
    backgroundColor: Colors.primaryDark,
  },
  filterIcon: {
    fontSize: 16,
  },
  filterText: {
    fontSize: FontSizes.sm,
    fontWeight: '500',
    color: Colors.primaryDark,
  },
  filterTextActive: {
    color: Colors.white,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  section: {
    paddingTop: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.primaryDark,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: Spacing.md,
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    borderRadius: BorderRadius.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  iconText: {
    fontSize: 24,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  notificationType: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  notificationTime: {
    fontSize: FontSizes.xs,
    color: Colors.gray,
  },
  notificationMessage: {
    fontSize: FontSizes.sm,
    color: Colors.darkGray,
    lineHeight: 20,
  },
});

export default NotificationsScreen;