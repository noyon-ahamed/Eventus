// src/screens/LoadDetail/LoadDetailScreen.tsx
import React from 'react';
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

const LoadDetailScreen = ({ navigation }: any) => {
  const loadData = {
    id: 'LD-2024-5847',
    status: 'Pending Pickup',
    distance: '$245.00',
    estimatedTime: '3h 45m',
    weight: '42000 lbs',
    ratePerMile: '$2.45',
    total: '$2,075',
    pickup: {
      location: 'Earthcare scapes church god',
      time: 'Today, 8:00 AM',
    },
    delivery: {
      location: '1250 Commerce Street\nDallas, TX 75201',
      time: 'Today, 8:00 PM',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Load Detail</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.loadHeader}>
            <View style={styles.loadIdContainer}>
              <Text style={styles.truckIcon}>📦</Text>
              <View>
                <Text style={styles.loadIdLabel}>Load ID</Text>
                <Text style={styles.loadId}>{loadData.id}</Text>
              </View>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{loadData.status}</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Distance</Text>
                <Text style={styles.statValue}>{loadData.distance}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Est. Time</Text>
                <Text style={styles.statValue}>{loadData.estimatedTime}</Text>
              </View>
            </View>

            <View style={styles.statsGrid}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Weight</Text>
                <Text style={styles.gridValue}>{loadData.weight}</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Rate/Mile</Text>
                <Text style={styles.gridValue}>{loadData.ratePerMile}</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Total</Text>
                <Text style={styles.gridValue}>{loadData.total}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationIcon}>📍</Text>
            <View style={styles.locationInfo}>
              <Text style={styles.locationLabel}>Pickup</Text>
              <Text style={styles.locationAddress}>{loadData.pickup.location}</Text>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeIcon}>🕐</Text>
            <Text style={styles.timeText}>{loadData.pickup.time}</Text>
          </View>
        </View>

        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationIcon}>📍</Text>
            <View style={styles.locationInfo}>
              <Text style={styles.locationLabel}>Delivery Location</Text>
              <Text style={styles.locationAddress}>{loadData.delivery.location}</Text>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeIcon}>🕐</Text>
            <Text style={styles.timeText}>{loadData.delivery.time}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('TripStatus')}
        >
          <Text style={styles.primaryButtonText}>Mark the Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => {}}
        >
          <Text style={styles.secondaryButtonText}>Start Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>View BOL</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={[styles.navIcon, styles.navIconActive]}>💳</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    margin: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  loadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  loadIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  truckIcon: {
    fontSize: 32,
  },
  loadIdLabel: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    marginBottom: 2,
  },
  loadId: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  statusBadge: {
    backgroundColor: Colors.orange,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.white,
  },
  statsContainer: {
    backgroundColor: Colors.primaryDark,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
    marginHorizontal: 2,
  },
  gridLabel: {
    fontSize: FontSizes.xs,
    color: Colors.gray,
    marginBottom: 4,
  },
  gridValue: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.white,
  },
  locationCard: {
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
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  locationIcon: {
    fontSize: 24,
    marginRight: Spacing.sm,
  },
  locationInfo: {
    flex: 1,
  },
  locationLabel: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: FontSizes.md,
    fontWeight: '500',
    color: Colors.primaryDark,
    lineHeight: 22,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  timeIcon: {
    fontSize: 16,
    marginRight: Spacing.xs,
  },
  timeText: {
    fontSize: FontSizes.sm,
    color: Colors.orange,
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
  },
  primaryButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.white,
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
  },
  secondaryButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  linkButton: {
    alignItems: 'center',
    paddingVertical: Spacing.sm,
  },
  linkButtonText: {
    fontSize: FontSizes.md,
    color: Colors.primaryDark,
    fontWeight: '500',
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

export default LoadDetailScreen;