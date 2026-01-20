import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface LoadCardProps {
  id: string;
  price: string;
  date: string;
  pickupCity: string;
  dropoffCity: string;
  status: 'Unassigned' | 'Assigned' | 'Delivered';
  driverName?: string;
  onPressAssign?: () => void;
}

export const LoadCard = ({ 
  id, price, date, pickupCity, dropoffCity, status, driverName, onPressAssign 
}: LoadCardProps) => {
  return (
    <View style={styles.card}>
      {/* Header: ID and Status Badge */}
      <View style={styles.headerRow}>
        <View style={styles.idContainer}>
          <Icon name="cube-outline" size={20} color="#0D1F2D" />
          <Text style={styles.idText}>{id}</Text>
        </View>
        <View style={[styles.badge, status === 'Unassigned' ? styles.badgeGray : styles.badgeGreen]}>
          <Icon name="account-circle-outline" size={16} color="#64748B" />
          <Text style={styles.badgeText}>{driverName || status}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Route Section */}
      <View style={styles.routeContainer}>
        {/* The Graphic (Dots and Line) */}
        <View style={styles.timelineGraphic}>
          <View style={[styles.dot, { backgroundColor: '#4E5BF2' }]} />
          <View style={styles.line} />
          <View style={[styles.dot, { backgroundColor: '#F44336' }]} />
        </View>

        {/* The Text (Cities) */}
        <View style={styles.routeTextContainer}>
          <View style={styles.locationBlock}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.city}>{pickupCity}</Text>
          </View>
          <View style={styles.locationBlock}>
            <Text style={styles.label}>To</Text>
            <Text style={styles.city}>{dropoffCity}</Text>
          </View>
        </View>
      </View>

      {/* Footer: Date and Price */}
      <View style={styles.footerRow}>
        <View style={styles.dateContainer}>
          <Ionicons name="calendar-outline" size={16} color="#0D1F2D" />
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>

      {/* Action Button (Only if Unassigned) */}
      {status === 'Unassigned' && (
        <TouchableOpacity style={styles.assignBtn} onPress={onPressAssign}>
          <Text style={styles.assignBtnText}>Assign Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
    color: '#0D1F2D',
  },
  badge: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  badgeGray: { backgroundColor: '#F1F5F9' },
  badgeGreen: { backgroundColor: '#E0F2F1' }, // Light green for assigned
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 16,
  },
  routeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineGraphic: {
    alignItems: 'center',
    marginRight: 12,
    marginTop: 4,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 35, // Adjust based on spacing
    backgroundColor: '#CBD5E1',
    borderStyle: 'dashed', // (Note: react-native needs borderWidth to show dashed, simple View is solid)
    marginVertical: 4,
  },
  routeTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: 70, // Matches graphic height
  },
  locationBlock: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 2,
  },
  city: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0D1F2D',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 6,
    color: '#0D1F2D',
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D1F2D',
  },
  assignBtn: {
    backgroundColor: '#0D1F2D',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  assignBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});