// src/screens/Earnings/EarningsScreen.tsx
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

const EarningsScreen = ({ navigation }: any) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const loadsHistory = [
    {
      id: 'LD-2024-5847',
      from: '4140 Parker Rd. Allentown, New Mexico 31134',
      to: '3891 Ranchview Dr. Richardson, California 62639',
      date: 'Oct 20,2025',
      amount: '$245.00',
      status: 'Paid',
      statusColor: Colors.green,
    },
    {
      id: 'LD-2024-5847',
      from: '2464 Royal Ln. Mesa, New Jersey 45463',
      to: '6391 Elgin St. Celina, Delaware 10299',
      date: 'Oct 20,2025',
      amount: '$345.00',
      status: 'Pending',
      statusColor: Colors.orange,
    },
    {
      id: 'LD-2024-5847',
      from: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      to: '4517 Washington Ave. Manchester, Kentucky 39495',
      date: 'Oct 20,2025',
      amount: '$445.00',
      status: 'Paid',
      statusColor: Colors.green,
    },
  ];

  const periods = [
    { id: 'week', label: 'This Week' },
    { id: 'lastWeek', label: 'Last Week' },
    { id: 'month', label: 'Last Month' },
  ];

  const renderLoadCard = (load: any) => (
    <View key={load.id + load.date} style={styles.loadCard}>
      <View style={styles.loadHeader}>
        <View style={styles.loadIdContainer}>
          <Text style={styles.loadIcon}>📦</Text>
          <View>
            <Text style={styles.loadIdLabel}>Load ID</Text>
            <Text style={styles.loadId}>{load.id}</Text>
          </View>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: load.statusColor }]}>
          <Text style={styles.statusText}>{load.status}</Text>
        </View>
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationRow}>
          <View style={styles.locationDot} />
          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>From</Text>
            <Text style={styles.locationAddress}>{load.from}</Text>
          </View>
        </View>

        <View style={styles.locationDivider} />

        <View style={styles.locationRow}>
          <View style={[styles.locationDot, styles.dropoffDot]} />
          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>To</Text>
            <Text style={styles.locationAddress}>{load.to}</Text>
          </View>
        </View>
      </View>

      <View style={styles.loadFooter}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateIcon}>📅</Text>
          <Text style={styles.dateText}>{load.date}</Text>
        </View>
        <Text style={styles.amount}>{load.amount}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Total Earnings</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.earningsCard}>
          <View style={styles.periodSelector}>
            {periods.map((period) => (
              <TouchableOpacity
                key={period.id}
                style={[
                  styles.periodButton,
                  selectedPeriod === period.id && styles.periodButtonActive,
                ]}
                onPress={() => setSelectedPeriod(period.id)}
              >
                <Text
                  style={[
                    styles.periodText,
                    selectedPeriod === period.id && styles.periodTextActive,
                  ]}
                >
                  {period.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.earningsAmount}>
            <Text style={styles.earningsLabel}>Total Earnings</Text>
            <Text style={styles.earningsValue}>$245.00</Text>
          </View>
        </View>

        <View style={styles.historyHeader}>
          <Text style={styles.historyTitle}>Loads History</Text>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadIcon}>⬇️</Text>
            <Text style={styles.downloadText}>Download Statement</Text>
          </TouchableOpacity>
        </View>

        {loadsHistory.map(renderLoadCard)}

        <View style={{ height: 100 }} />
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Messages')}>
          <Text style={styles.navIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={[styles.navIcon, styles.navIconActive]}>💳</Text>
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
  earningsCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    margin: Spacing.md,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#D4AF37', // Gold color from image roughly
    padding: Spacing.sm,
  },
  periodButton: {
    flex: 1,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    borderRadius: BorderRadius.sm,
  },
  periodButtonActive: {
    backgroundColor: Colors.white,
  },
  periodText: {
    fontSize: FontSizes.sm,
    fontWeight: '500',
    color: Colors.white,
  },
  periodTextActive: {
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  earningsAmount: {
    backgroundColor: Colors.primaryDark,
    padding: Spacing.lg,
    alignItems: 'flex-start',
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  earningsLabel: {
    fontSize: FontSizes.sm,
    color: Colors.white,
    marginBottom: Spacing.xs,
    opacity: 0.8,
  },
  earningsValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  historyTitle: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.primaryDark,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  downloadIcon: {
    fontSize: 16,
  },
  downloadText: {
    fontSize: FontSizes.xs,
    color: Colors.primaryDark,
    fontWeight: '500',
  },
  loadCard: {
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
  loadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  loadIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  loadIcon: {
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.white,
  },
  locationContainer: {
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
  locationInfo: {
    flex: 1,
  },
  locationLabel: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    marginBottom: 2,
  },
  locationAddress: {
    fontSize: FontSizes.sm,
    color: Colors.primaryDark,
    fontWeight: '500',
    lineHeight: 18,
  },
  locationDivider: {
    width: 1,
    height: 16,
    backgroundColor: Colors.border,
    marginLeft: 4,
    marginVertical: 4,
  },
  loadFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  dateIcon: {
    fontSize: 16,
  },
  dateText: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryDark,
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

export default EarningsScreen;