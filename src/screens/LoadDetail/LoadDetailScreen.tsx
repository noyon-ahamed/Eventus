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
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../constants/colors';

const LoadDetailScreen = ({ navigation }: any) => {
  const loadData = {
    id: 'LD-2024-5847',
    status: 'Pending Pickup',
    distance: '$245.00', // As per design image, though label says Distance and value is currency
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
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Load Detail</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Load ID Card */}
        <View style={styles.idCard}>
          <View style={styles.idHeader}>
            <View style={styles.idIconContainer}>
              <Icon name="cube-outline" size={24} color={Colors.black} />
            </View>
            <View>
              <Text style={styles.idLabel}>Load ID</Text>
              <Text style={styles.idValue}>{loadData.id}</Text>
            </View>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{loadData.status}</Text>
          </View>
        </View>

        {/* Dark Details Card */}
        <View style={styles.detailsCard}>
          <View style={styles.mainStats}>
            <View>
              <Text style={styles.statLabel}>Distance</Text>
              <Text style={styles.statValueLarge}>{loadData.distance}</Text>
            </View>
            <View>
              <Text style={[styles.statLabel, { textAlign: 'right' }]}>Est. Time</Text>
              <Text style={[styles.statValueLarge, { textAlign: 'right' }]}>{loadData.estimatedTime}</Text>
            </View>
          </View>

          <View style={styles.gridStats}>
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

        {/* Pickup Location */}
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Icon name="location-outline" size={24} color={Colors.black} style={styles.locationIcon} />
            <View style={styles.locationInfo}>
              <Text style={styles.locationLabel}>Pickup</Text>
              <Text style={styles.locationAddress}>{loadData.pickup.location}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeContainer}>
            <Icon name="time-outline" size={18} color={Colors.orange} />
            <Text style={styles.timeText}>{loadData.pickup.time}</Text>
          </View>
        </View>

        {/* Delivery Location */}
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Icon name="location-outline" size={24} color={Colors.black} style={styles.locationIcon} />
            <View style={styles.locationInfo}>
              <Text style={styles.locationLabel}>Delivery Location</Text>
              <Text style={styles.locationAddress}>{loadData.delivery.location}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeContainer}>
            <Icon name="time-outline" size={18} color={Colors.orange} />
            <Text style={styles.timeText}>{loadData.delivery.time}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('TripStatus')}
          >
            <Text style={styles.primaryButtonText}>Mark the Delivery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => { }}
          >
            <Text style={styles.secondaryButtonText}>Start Navigation</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>View BOL</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
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
    backgroundColor: Colors.white, // Or background color if transparent header
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
  content: {
    flex: 1,
    padding: Spacing.md,
  },
  idCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  idHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  idIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.lightGray, // Or pale orange? Design looks like plain icon but let's put in container or just icon
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  idLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.black,
  },
  idValue: {
    fontSize: FontSizes.md,
    color: Colors.gray,
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: '#F77F00', // Orange color from design
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusText: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
    color: Colors.white,
  },
  detailsCard: {
    backgroundColor: Colors.primaryDark,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  mainStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  statLabel: {
    fontSize: FontSizes.sm,
    color: Colors.lightGray,
    marginBottom: 4,
  },
  statValueLarge: {
    fontSize: 24, // 32 might be too big
    fontWeight: 'bold',
    color: Colors.white,
  },
  gridStats: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  gridItem: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  gridLabel: {
    fontSize: FontSizes.xs,
    color: Colors.lightGray,
    marginBottom: 4,
  },
  gridValue: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.white,
  },
  locationCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  locationIcon: {
    marginRight: Spacing.md,
    marginTop: 2,
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
    color: Colors.black,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  timeText: {
    fontSize: FontSizes.sm,
    color: Colors.orange,
    fontWeight: '500',
  },
  actionsContainer: {
    marginTop: Spacing.md,
  },
  primaryButton: {
    backgroundColor: '#D9912B', // Gold/Orange
    paddingVertical: 16,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  primaryButtonText: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.white,
  },
  secondaryButton: {
    backgroundColor: Colors.background,
    paddingVertical: 16,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray, // Outline color
    marginBottom: Spacing.md,
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
    fontWeight: '600',
    marginTop: Spacing.xs,
  },
});

export default LoadDetailScreen;