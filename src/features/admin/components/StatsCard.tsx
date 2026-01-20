import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface StatsCardProps {
  label: string;
  value: string;
  trendPercentage: string;
  trendValue?: string; // e.g., "+$6k t"
  isPositive?: boolean;
  iconName?: string; // For vector icons
  iconSource?: ImageSourcePropType; // For custom images
}

export const StatsCard = ({
  label,
  value,
  trendPercentage,
  trendValue,
  iconName,
  iconSource,
  isPositive = true
}: StatsCardProps) => {
  return (
    <View style={styles.card}>
      {/* Header: Icon + Label */}
      <View style={styles.headerRow}>
        <View style={styles.iconContainer}>
          {iconSource ? (
            <Image
              source={iconSource}
              style={styles.iconImage}
              resizeMode="contain"
            />
          ) : (
            <Icon name={iconName || 'help-circle'} size={22} color="#0D1F2D" />
          )}
        </View>
        <Text style={styles.label} numberOfLines={2}>{label}</Text>
      </View>

      {/* Main Value */}
      <Text style={styles.value}>{value}</Text>

      {/* Footer: Trend */}
      <View style={styles.trendRow}>
        <Icon
          name={isPositive ? "arrow-top-right" : "arrow-bottom-right"}
          size={16}
          color={isPositive ? "#10B981" : "#EF4444"}
        />
        <Text style={[styles.trendText, { color: isPositive ? "#10B981" : "#EF4444" }]}>
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    // Ensure the card fills the wrapper provided by the parent
    flex: 1,
    minHeight: 140,
    justifyContent: 'space-between',
    // Shadow for depth
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E2E8F0', // Light gray circle bg
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 14,
    color: '#334155', // Slate gray
    fontWeight: '600',
    flex: 1,
    marginTop: 4, // Align slightly with icon
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0D1F2D', // Dark navy
    marginBottom: 8,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  trendValue: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 8,
  },
});