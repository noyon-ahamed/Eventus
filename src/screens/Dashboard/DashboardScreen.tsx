// src/screens/Dashboard/DashboardScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../constants/colors';

const DashboardScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState('home');

  const activeDeliveries = [
    {
      id: '1',
      status: 'In Transit',
      statusColor: Colors.green,
      amount: '$245.00',
      pickup: 'Earthcare scapes church god',
      dropoff: 'Earthcare scapes church god',
      estimatedTime: '3h 45m',
      mapPreview: 'map',
    },
    {
      id: '2',
      status: 'Pending',
      statusColor: Colors.orange,
      amount: '$245.00',
      pickup: '789 Pine Rd, Phoenix, AZ 85001',
      dropoff: '321 Elm St, Tucson, AZ 85701',
      estimatedTime: '3h 45m',
      mapPreview: 'map',
      action: 'Start Trip',
    },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {/* Menu can be implemented later */}}>
        <View style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
      </TouchableOpacity>

      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>☁️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderGreeting = () => (
    <View style={styles.greetingContainer}>
      <Text style={styles.greeting}>Hi Numan 👋</Text>
      <Text style={styles.subGreeting}>Ready for your next delivery?</Text>
    </View>
  );

  const renderDeliveryCard = (delivery: any, index: number) => (
    <View key={delivery.id} style={styles.deliveryCard}>
      <View style={styles.deliveryHeader}>
        <View style={[styles.statusBadge, { backgroundColor: delivery.statusColor }]}>
          <Text style={styles.statusText}>{delivery.status}</Text>
        </View>
        <Text style={styles.amount}>{delivery.amount}</Text>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <View style={styles.routeLine} />
          <View style={[styles.mapMarker, styles.startMarker]} />
          <View style={[styles.mapMarker, styles.endMarker]} />
        </View>
      </View>

      <View style={styles.locationInfo}>
        <View style={styles.locationRow}>
          <View style={styles.locationDot} />
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationLabel}>Pickup</Text>
            <Text style={styles.locationAddress}>{delivery.pickup}</Text>
          </View>
        </View>

        <View style={styles.locationDivider} />

        <View style={styles.locationRow}>
          <View style={[styles.locationDot, styles.dropoffDot]} />
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationLabel}>Drop off</Text>
            <Text style={styles.locationAddress}>{delivery.dropoff}</Text>
          </View>
        </View>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.timeIcon}>🕐</Text>
        <View style={styles.timeTextContainer}>
          <Text style={styles.timeLabel}>Estimated Time</Text>
          <Text style={styles.timeValue}>{delivery.estimatedTime}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => navigation.navigate('LoadDetail')}
      >
        <Text style={styles.actionButtonText}>
          {delivery.action || 'View Navigation'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderBottomNav = () => (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab('home')}
      >
        <Text style={[styles.navIcon, activeTab === 'home' && styles.navIconActive]}>
          🏠
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Messages')}
      >
        <Text style={styles.navIcon}>💬</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Text style={styles.navIcon}>🔔</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Earnings')}
      >
        <Text style={styles.navIcon}>💳</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.navIcon}>👤</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />
      
      <View style={styles.headerContainer}>
        {renderHeader()}
        {renderGreeting()}
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.deliveriesHeader}>
          <Text style={styles.sectionTitle}>Active Deliveries</Text>
          <Text style={styles.deliveryCount}>You have 3 loads assigned</Text>
        </View>

        {activeDeliveries.map(renderDeliveryCard)}

        <View style={{ height: 100 }} />
      </ScrollView>

      {renderBottomNav()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    backgroundColor: Colors.primaryDark,
    paddingBottom: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'space-around',
  },
  menuLine: {
    width: 24,
    height: 2,
    backgroundColor: Colors.white,
    borderRadius: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  greetingContainer: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.lg,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: Spacing.xs,
  },
  subGreeting: {
    fontSize: FontSizes.md,
    color: Colors.gray,
  },
  content: {
    flex: 1,
  },
  deliveriesHeader: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.primaryDark,
    marginBottom: Spacing.xs,
  },
  deliveryCount: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  deliveryCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  deliveryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.white,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryDark,
  },
  mapContainer: {
    height: 150,
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    flex: 1,
    position: 'relative',
  },
  routeLine: {
    position: 'absolute',
    top: '30%',
    left: '20%',
    width: '60%',
    height: 3,
    backgroundColor: Colors.green,
    borderRadius: 2,
  },
  mapMarker: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
  },
  startMarker: {
    backgroundColor: Colors.green,
    top: '30%',
    left: '18%',
  },
  endMarker: {
    backgroundColor: Colors.red,
    top: '30%',
    right: '18%',
  },
  locationInfo: {
    marginBottom: Spacing.md,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primaryDark,
    marginTop: 6,
    marginRight: Spacing.sm,
  },
  dropoffDot: {
    backgroundColor: Colors.red,
  },
  locationTextContainer: {
    flex: 1,
  },
  locationLabel: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    marginBottom: 2,
  },
  locationAddress: {
    fontSize: FontSizes.md,
    color: Colors.primaryDark,
    fontWeight: '500',
  },
  locationDivider: {
    width: 1,
    height: 20,
    backgroundColor: Colors.border,
    marginLeft: 4,
    marginVertical: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  timeIcon: {
    fontSize: 20,
    marginRight: Spacing.sm,
  },
  timeTextContainer: {
    flex: 1,
  },
  timeLabel: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    marginBottom: 2,
  },
  timeValue: {
    fontSize: FontSizes.md,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: Colors.primaryDark,
    paddingVertical: 14,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.white,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: Spacing.sm,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.xs,
  },
  navIcon: {
    fontSize: 24,
    opacity: 0.6,
  },
  navIconActive: {
    opacity: 1,
  },
});

export default DashboardScreen;