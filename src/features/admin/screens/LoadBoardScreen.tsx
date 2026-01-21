import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoadCard } from '../components/LoadCard';
import { ROUTES } from '../../../navigation/routes';
// Mock Data
const MOCK_LOADS = [
  { id: 'LD-2024-001', price: '$245.00', date: 'Oct 20, 2025', from: 'Los Angeles, CA', to: 'Phoenix, AZ', status: 'Unassigned' },
  { id: 'LD-2024-002', price: '$520.00', date: 'Oct 22, 2025', from: 'Dallas, TX', to: 'Austin, TX', status: 'Assigned', driver: 'Harold' },
  { id: 'LD-2024-003', price: '$1,200.00', date: 'Oct 25, 2025', from: 'Miami, FL', to: 'Orlando, FL', status: 'Unassigned' },
];

export const LoadBoardScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState('New Load');
  const tabs = ['New Load', 'In Progress', 'Delivered', 'Settled'];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1F2D" />

      {/* 1. Header (Same style as Dashboard) */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <Icon name="chatbubble-ellipses-outline" size={24} color="#FFF" style={{ marginRight: 16 }} />
            <Icon name="notifications-outline" size={24} color="#FFF" />
          </View>
        </View>
        <Text style={styles.title}>Load Board</Text>
        <Text style={styles.subtitle}>Manage and track all active loads</Text>
      </View>

      {/* 2. White Content Area */}
      <View style={styles.contentContainer}>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Load List */}
        <FlatList
          data={MOCK_LOADS} // You would filter this based on activeTab
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          renderItem={({ item }) => (
            <LoadCard
              id={item.id}
              price={item.price}
              date={item.date}
              pickupCity={item.from}
              dropoffCity={item.to}
              status={item.status as any}
              driverName={item.driver}
              onPressAssign={() => {
                // Navigate to "Assign Load" screen later
                // navigation.navigate(ROUTES.ASSIGN_LOAD, { loadId: item.id });
              }}
            />
          )}
        />

        {/* Floating Add Button */}
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate(ROUTES.ASSIGN_LOAD)} // <--- Update this line
        >
          <Icon name="add" size={32} color="#FFF" />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1F2D',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuBtn: {
    padding: 8,
    backgroundColor: '#1E2D3D',
    borderRadius: 12,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#94A3B8',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#FDE68A', // Yellow/Gold color from design
  },
  tabText: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#0D1F2D',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#D97706', // Gold/Orange color
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});