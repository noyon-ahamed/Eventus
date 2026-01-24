
import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { BarChart, LineChart } from 'react-native-gifted-charts';
import { useNavigation } from '@react-navigation/native'; // Added import
import { StatsCard } from '../components/StatsCard';
import { ROUTES } from '../../../navigation/routes';


const PointerLabel = (_items: any) => {
  return (
    <View
      style={{
        height: 90,
        width: 100,
        justifyContent: 'center',
        backgroundColor: '#1F2937',
        borderRadius: 8,
        padding: 10,
      }}>
      <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', marginBottom: 4 }}>
        Jun, 2021
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#6366F1', marginRight: 6 }} />
        <Text style={{ color: 'white', fontSize: 11 }}>Revenue</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981', marginRight: 6 }} />
        <Text style={{ color: 'white', fontSize: 11 }}>Orders</Text>
      </View>
    </View>
  );
};

export const DispatchDashboard = () => {
  const navigation = useNavigation<any>();

  // Data for "Weekly Loads" (Bar Chart)
  const barData = [
    { value: 18, frontColor: '#4E5BF2' },
    { value: 14, frontColor: '#C7CBE8' },
    { value: 36, frontColor: '#4E5BF2' },
    { value: 30, frontColor: '#C7CBE8' },
    { value: 22, frontColor: '#4E5BF2' },
    { value: 18, frontColor: '#C7CBE8' },
    { value: 30, frontColor: '#4E5BF2' },
    { value: 24, frontColor: '#C7CBE8' },
    { value: 26, frontColor: '#4E5BF2' },
    { value: 24, frontColor: '#C7CBE8' },
  ];

  // Data for "Revenue vs Orders" (Line Chart)
  const revenueData = [
    { value: 20 }, { value: 26 }, { value: 32 }, { value: 28 },
    { value: 30 }, { value: 35 }, { value: 25 },
  ];
  const ordersData = [
    { value: 10 }, { value: 12 }, { value: 10 }, { value: 16 },
    { value: 14 }, { value: 12 }, { value: 14 },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1F2D" />

      {/* 1. HEADER SECTION */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.menuBtn}>
            <Icon name="menu" size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.pillContainer}>
            <Icon name="chatbubble-ellipses-outline" size={20} color="#FFF" style={styles.pillIcon} />
            <Icon name="notifications-outline" size={20} color="#FFF" />
            <View style={styles.badge} />
          </View>
        </View>
        <Text style={styles.title}>Admin Dashboard</Text>
        <Text style={styles.subtitle}>Manage and track all active loads</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* --- GRID STARTS HERE --- */}
        <View style={styles.grid}>

          {/* Card 1: Total Loads (Clickable) */}
          <TouchableOpacity
            style={styles.cardWrapper}
            onPress={() => navigation.navigate(ROUTES.LOAD_BOARD)}
            activeOpacity={0.8}
          >
            <StatsCard
              label="Total Loads"
              value="294"
              trendPercentage="21.9%"
              trendValue="+$6k"
              iconSource={require('../../../assets/icons/load.png')}
            />
          </TouchableOpacity>

          {/* Card 2: Active Drivers */}
          <TouchableOpacity
            style={styles.cardWrapper}
            onPress={() => navigation.navigate(ROUTES.ACTIVE_DRIVER)}
            activeOpacity={0.8}
          >
            <StatsCard
              label="Active Drivers"
              value="48"
              trendPercentage="1.9%"
              isPositive={false}
              iconName="account-group-outline"
            />
          </TouchableOpacity>

          {/* Card 3: Pending Payments */}
          <View style={styles.cardWrapper}>
            <StatsCard
              label="Pending Payments"
              value="$24.5k"
              trendPercentage="21.9%"
              // iconName="currency-usd"
              iconSource={require('../../../assets/icons/dollar-circle.png')}
            />
          </View>

          {/* Card 4: Fleet Size */}
          <View style={styles.cardWrapper}>
            <StatsCard
              label="Fleet Size"
              value="52"
              trendPercentage="21.9%"
              trendValue="+$6k"
              // iconName="truck-outline"
              iconSource={require('../../../assets/icons/truck.png')}
            />
          </View>

        </View>
        {/* --- GRID ENDS HERE --- */}

        {/* 3. WEEKLY LOADS CHART */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly Loads Overview</Text>
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <Text style={styles.legendLabel}>This Month</Text>
              <Text style={styles.legendValue}>60</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                <Text style={{ color: '#10B981', fontSize: 12, marginRight: 4 }}>↗</Text>
                <Text style={{ color: '#10B981', fontSize: 12, fontWeight: '600' }}>0.20%</Text>
              </View>
            </View>
            <View style={styles.legendItem}>
              <Text style={styles.legendLabel}>Last Month</Text>
              <Text style={styles.legendValue}>$50</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                <Text style={{ color: '#EF4444', fontSize: 12, marginRight: 4 }}>↘</Text>
                <Text style={{ color: '#EF4444', fontSize: 12, fontWeight: '600' }}>1.04%</Text>
              </View>
            </View>
          </View>

          <BarChart
            data={barData}
            barWidth={16}
            spacing={8}
            roundedTop
            roundedBottom
            hideRules={false}
            rulesType="dashed"
            rulesColor="#E5E7EB"
            rulesThickness={1}
            xAxisThickness={0}
            yAxisThickness={0}
            yAxisTextStyle={{ color: '#9CA3AF', fontSize: 12 }}
            noOfSections={4}
            maxValue={40}
            height={180}
            width={280}
            showGradient={false}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, gap: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#6366F1', marginRight: 6 }} />
              <Text style={{ color: '#64748B', fontSize: 12, fontWeight: '600' }}>Current Month</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#C7D2FE', marginRight: 6 }} />
              <Text style={{ color: '#64748B', fontSize: 12, fontWeight: '600' }}>Last Month</Text>
            </View>
          </View>
        </View>

        {/* 4. REVENUE VS ORDERS CHART */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Revenue vs Orders</Text>
          <View style={[styles.legendContainer, { marginBottom: 20 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <View style={[styles.dot, { backgroundColor: '#6366F1' }]} />
              <Text style={styles.legendText}>Revenue</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.dot, { backgroundColor: '#10B981' }]} />
              <Text style={styles.legendText}>Orders</Text>
            </View>
          </View>

          <LineChart
            data={revenueData}
            data2={ordersData}
            height={200}
            width={280}
            showVerticalLines={false}
            spacing={40}
            initialSpacing={20}
            color1="#6366F1"
            color2="#10B981"
            dataPointsHeight={8}
            dataPointsWidth={8}
            dataPointsColor1="#6366F1"
            dataPointsColor2="#10B981"
            thickness={3}
            hideRules={false}
            rulesType="dashed"
            rulesColor="#E5E7EB"
            rulesThickness={1}
            yAxisThickness={0}
            xAxisThickness={0}
            yAxisTextStyle={{ color: '#9CA3AF', fontSize: 12 }}
            xAxisLabelTexts={['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
            xAxisLabelTextStyle={{ color: '#9CA3AF', fontSize: 12 }}
            curved
            areaChart
            startFillColor1="rgba(99, 102, 241, 0.1)"
            startFillColor2="rgba(16, 185, 129, 0.1)"
            endFillColor1="rgba(99, 102, 241, 0)"
            endFillColor2="rgba(16, 185, 129, 0)"
            startOpacity={0.4}
            endOpacity={0}
            noOfSections={4}
            maxValue={40}
            yAxisLabelPrefix="$"
            yAxisLabelSuffix="k"
            pointerConfig={{
              pointerStripHeight: 200,
              pointerStripColor: '#E5E7EB',
              pointerStripWidth: 1,
              pointerColor: '#6366F1',
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 90,
              activatePointersOnLongPress: false,
              autoAdjustPointerLabelPosition: true,
              pointerLabelComponent: PointerLabel,
            }}
          />
        </View>

        {/* Bottom padding for scrolling */}
        <View style={{ height: 20 }} />

      </ScrollView>
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
    marginBottom: 20,
    alignItems: 'center',
  },
  menuBtn: {
    padding: 8,
    backgroundColor: '#1E2D3D',
    borderRadius: 12,
  },
  cardWrapper: {
    width: '48%',   // Forces 2 columns
    marginBottom: 16, // Vertical gap between rows
  },
  pillContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E2D3D',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  pillIcon: {
    marginRight: 12,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 14,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF5252',
    borderWidth: 1,
    borderColor: '#1E2D3D',
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
  scrollContent: {
    backgroundColor: '#F3F4F6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingTop: 30,
    minHeight: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },
  clickableCard: {
    width: '48%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0D1F2D',
    marginBottom: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  legendItem: {
    marginRight: 24,
  },
  legendValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D1F2D',
  },
  legendLabel: {
    fontSize: 12,
    color: '#64748B',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '600',
  },
});