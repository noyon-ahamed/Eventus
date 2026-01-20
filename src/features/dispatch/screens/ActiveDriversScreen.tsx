import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface Driver {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
    compliance: number;
    lastDelivery: string;
}

const mockDrivers: Driver[] = [
    {
        id: '1',
        name: 'Courtney Henry',
        avatar: 'https://i.pravatar.cc/150?img=1',
        isOnline: true,
        compliance: 90,
        lastDelivery: '2 hours ago',
    },
    {
        id: '2',
        name: 'Arlene McCoy',
        avatar: 'https://i.pravatar.cc/150?img=2',
        isOnline: false,
        compliance: 82,
        lastDelivery: '3 hours ago',
    },
    {
        id: '3',
        name: 'Ronald Richards',
        avatar: 'https://i.pravatar.cc/150?img=3',
        isOnline: true,
        compliance: 96,
        lastDelivery: '1 hours ago',
    },
    {
        id: '4',
        name: 'Cameron Williamson',
        avatar: 'https://i.pravatar.cc/150?img=4',
        isOnline: true,
        compliance: 90,
        lastDelivery: '4 hours ago',
    },
    {
        id: '5',
        name: 'Michael Chen',
        avatar: 'https://i.pravatar.cc/150?img=5',
        isOnline: true,
        compliance: 90,
        lastDelivery: '2 hours ago',
    },
];

export const ActiveDriversScreen = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');

    const onlineDrivers = mockDrivers.filter(d => d.isOnline).length;
    const offlineDrivers = mockDrivers.filter(d => !d.isOnline).length;

    const getComplianceColor = (compliance: number) => {
        if (compliance >= 90) return '#4CAF50';
        if (compliance >= 80) return '#FF9800';
        return '#F44336';
    };

    const renderDriverCard = (driver: Driver) => (
        <View key={driver.id} style={styles.driverCard}>
            <View style={styles.driverHeader}>
                <View style={styles.driverInfo}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: driver.avatar }} style={styles.avatar} />
                        <View
                            style={[
                                styles.statusDot,
                                { backgroundColor: driver.isOnline ? '#4CAF50' : '#9E9E9E' },
                            ]}
                        />
                    </View>
                    <Text style={styles.driverName}>{driver.name}</Text>
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="call-outline" size={22} color="#0D1F2D" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="chatbubble-outline" size={22} color="#0D1F2D" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.complianceSection}>
                <View style={styles.complianceHeader}>
                    <Text style={styles.complianceLabel}>Compliance</Text>
                    <Text style={styles.complianceValue}>{driver.compliance}%</Text>
                </View>
                <View style={styles.progressBarBackground}>
                    <View
                        style={[
                            styles.progressBarFill,
                            {
                                width: `${driver.compliance}%`,
                                backgroundColor: getComplianceColor(driver.compliance),
                            },
                        ]}
                    />
                </View>
            </View>

            <View style={styles.deliveryInfo}>
                <Text style={styles.deliveryLabel}>Last Delivery</Text>
                <Text style={styles.deliveryTime}>{driver.lastDelivery}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-back" size={24} color="#0D1F2D" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Driver Management</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Stats Cards */}
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <MaterialCommunityIcons
                            name="account-check"
                            size={24}
                            color="#4CAF50"
                        />
                        <Text style={styles.statLabel}>Online</Text>
                        <Text style={styles.statValue}>{onlineDrivers}</Text>
                    </View>

                    <View style={styles.statCard}>
                        <MaterialCommunityIcons
                            name="account-off"
                            size={24}
                            color="#9E9E9E"
                        />
                        <Text style={styles.statLabel}>Offline</Text>
                        <Text style={styles.statValue}>{offlineDrivers}</Text>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Icon name="search" size={20} color="#9E9E9E" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search Drivers..."
                            placeholderTextColor="#9E9E9E"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <Image
                            source={require('../../../assets/icons/filter.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Driver List */}
                <View style={styles.driverList}>
                    {mockDrivers.map(driver => renderDriverCard(driver))}
                </View>

                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#F3F4F6',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0D1F2D',
    },
    placeholder: {
        width: 40,
    },
    scrollContent: {
        padding: 20,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 20,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    statLabel: {
        fontSize: 14,
        color: '#64748B',
        marginTop: 8,
        fontWeight: '500',
    },
    statValue: {
        fontSize: 32,
        fontWeight: '700',
        color: '#0D1F2D',
        marginTop: 4,
    },
    searchContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 12,
        fontSize: 15,
        color: '#0D1F2D',
    },
    filterButton: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    driverList: {
        gap: 16,
    },
    driverCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    driverHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    statusDot: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    driverName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0D1F2D',
    },
    actionButtons: {
        flexDirection: 'row',
        gap: 8,
    },
    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    complianceSection: {
        marginBottom: 12,
    },
    complianceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    complianceLabel: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '500',
    },
    complianceValue: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0D1F2D',
    },
    progressBarBackground: {
        height: 8,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 4,
    },
    deliveryInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deliveryLabel: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '500',
    },
    deliveryTime: {
        fontSize: 14,
        color: '#0D1F2D',
        fontWeight: '600',
    },
});
