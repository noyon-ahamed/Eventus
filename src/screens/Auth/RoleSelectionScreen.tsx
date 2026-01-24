import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../navigation/AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const RoleSelectionScreen = () => {
    const navigation = useNavigation();
    const { setRole } = useAuth();
    const [selectedRole, setSelectedRole] = useState<'Driver' | 'Admin' | null>(null);

    const handleRoleSelect = (role: 'Driver' | 'Admin') => {
        setSelectedRole(role);
        // Short delay to show selection effect before navigating
        setTimeout(() => {
            setRole(role);
            navigation.navigate('LoginPage' as never);
        }, 150);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.headerContainer}>
                    {/* Placeholder for Logo if needed, matching Splash/Login vibe */}
                    <Text style={styles.title}>Welcome back</Text>
                    <Text style={styles.subtitle}>Choose your profile to continue</Text>
                </View>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.card,
                            selectedRole === 'Driver' && styles.cardActive
                        ]}
                        activeOpacity={0.9}
                        onPress={() => handleRoleSelect('Driver')}
                    >
                        <View style={[
                            styles.iconContainer,
                            selectedRole === 'Driver' && styles.iconContainerActive
                        ]}>
                            <Icon
                                name="steering"
                                size={32}
                                color={selectedRole === 'Driver' ? '#D4A441' : '#B0B0B0'}
                            />
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Text style={[
                                styles.cardTitle,
                                selectedRole === 'Driver' && styles.cardTitleActive
                            ]}>Driver</Text>
                            <Text style={styles.cardDesc}>Access load details and update status</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Icon
                                name="chevron-right"
                                size={24}
                                color={selectedRole === 'Driver' ? '#D4A441' : '#E8E8E8'}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.card,
                            selectedRole === 'Admin' && styles.cardActive
                        ]}
                        activeOpacity={0.9}
                        onPress={() => handleRoleSelect('Admin')}
                    >
                        <View style={[
                            styles.iconContainer,
                            selectedRole === 'Admin' && styles.iconContainerActive
                        ]}>
                            <Icon
                                name="shield-account"
                                size={32}
                                color={selectedRole === 'Admin' ? '#D4A441' : '#B0B0B0'}
                            />
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Text style={[
                                styles.cardTitle,
                                selectedRole === 'Admin' && styles.cardTitleActive
                            ]}>Admin</Text>
                            <Text style={styles.cardDesc}>Manage dispatch and monitor operations</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Icon
                                name="chevron-right"
                                size={24}
                                color={selectedRole === 'Admin' ? '#D4A441' : '#E8E8E8'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    headerContainer: {
        marginBottom: 48,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 12,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 16,
        color: '#B0B0B0',
        textAlign: 'center',
    },
    cardsContainer: {
        gap: 16,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 3,
        height: 100,
    },
    cardActive: {
        borderColor: '#D4A441',
        backgroundColor: '#FDF9F0', // Very light gold/cream tint
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 18,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    iconContainerActive: {
        backgroundColor: 'rgba(212, 164, 65, 0.1)',
    },
    cardTextContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4,
    },
    cardTitleActive: {
        color: '#D4A441',
    },
    cardDesc: {
        fontSize: 13,
        color: '#B0B0B0',
        lineHeight: 18,
    },
    arrowContainer: {
        marginLeft: 8,
    }
});

export default RoleSelectionScreen;
