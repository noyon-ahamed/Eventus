import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface StatsCardProps {
  label: string;
  value: string;
  trendPercentage: string;
  trendValue?: string; // e.g., "+$6k t"
  isPositive?: boolean;
  iconName: string;
}

export const StatsCard = ({ 
  label, 
  value, 
  trendPercentage, 
  trendValue, 
  isPositive = true, 
  iconName 
}: StatsCardProps) => {
  return (
    <View style={styles.container}>
      {/* Header with Icon */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={20} color="#0D1F2D" />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>

      {/* Main Value */}
      <Text style={styles.value}>{value}</Text>

      {/* Trend Footer */}
      <View style={styles.footer}>
        <Icon 
          name={isPositive ? "arrow-top-right" : "arrow-bottom-right"} 
          size={16} 
          color={isPositive ? "#00C853" : "#FF5252"} 
        />
        <Text style={[styles.trendText, { color: isPositive ? "#00C853" : "#FF5252" }]}>
          {trendPercentage}
        </Text>
        {trendValue && (
          <Text style={styles.trendValue}>{trendValue}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%', // Forces 2 columns
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    // Shadow for iOS/Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  label: {
    fontSize: 12,
    color: '#64748B',
    flex: 1,
    flexWrap: 'wrap',
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0D1F2D',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 2,
  },
  trendValue: {
    fontSize: 12,
    color: '#64748B',
    marginLeft: 4,
  },
});