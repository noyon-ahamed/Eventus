import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


export const AssignLoadScreen = ({ navigation }: any) => {
  const [weight, setWeight] = useState('');
  const [rate, setRate] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />

      {/* 1. Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#0D1F2D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assign Load</Text>
        {/* Empty View for alignment */}
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Route Preview Section */}
        <Text style={styles.sectionLabel}>Route Preview</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>Route Preview</Text>
        </View>

        {/* 3. Load Details Form */}
        <Text style={styles.sectionLabel}>Load Details</Text>

        <View style={styles.formContainer}>
          {/* Pickup Location */}
          <Text style={styles.inputLabel}>Pickup Location</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter Pickup Address..."
              placeholderTextColor="#94A3B8"
              style={styles.textInput}
            />
            <Icon
              name="location-outline"
              size={20}
              color="#94A3B8"
              style={styles.inputIcon}
            />
          </View>

          {/* Drop-off Location */}
          <Text style={styles.inputLabel}>Drop-off Location</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter Drop-off address"
              placeholderTextColor="#94A3B8"
              style={styles.textInput}
            />
            <Icon
              name="location-outline"
              size={20}
              color="#94A3B8"
              style={styles.inputIcon}
            />
          </View>

          {/* Row: Weight & Rate */}
          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.inputLabel}>Weight (lbs)</Text>
              <TextInput
                placeholder="0"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                style={styles.simpleInput}
                value={weight}
                onChangeText={setWeight}
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.inputLabel}>Rate ($)</Text>
              <TextInput
                placeholder="0"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                style={styles.simpleInput}
                value={rate}
                onChangeText={setRate}
              />
            </View>
          </View>

          {/* Pickup Date */}
          <Text style={styles.inputLabel}>Pickup Date</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require('../../../assets/icons/calendar.png')}
              style={{
                position: 'absolute',
                left: 14,
                width: 20,
                height: 20,
                // resizeMode: 'contain',
                tintColor: '#0D1F2D',
                zIndex: 1,
              }}
            />
            <TextInput
              placeholder="mm/dd/yyyy"
              placeholderTextColor="#0D1F2D"
              style={[styles.textInput, { paddingLeft: 44 }]}
            />
          </View>

          {/* Select Driver */}
          <Text style={styles.inputLabel}>Select Driver</Text>
          <TouchableOpacity style={styles.selectWrapper}>
            <Text style={styles.selectText}>Choose Driver</Text>
            <Icon name="chevron-down" size={20} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* 4. Action Button */}
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Assign Load</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Light gray background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backBtn: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D1F2D',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0D1F2D',
    marginBottom: 12,
    marginTop: 8,
  },
  mapPlaceholder: {
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed', // Optional aesthetic
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  mapPlaceholderText: {
    color: '#94A3B8',
    fontSize: 14,
  },
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    // Soft shadow
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D1F2D',
    marginBottom: 8,
  },
  inputWrapper: {
    marginBottom: 16,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    paddingRight: 40, // Space for icon
    fontSize: 14,
    color: '#0D1F2D',
  },
  inputIcon: {
    position: 'absolute',
    right: 14,
    color: '#0D1F2D',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  halfInput: {
    width: '48%',
  },
  simpleInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#0D1F2D',
  },
  selectWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  selectText: {
    fontSize: 14,
    color: '#94A3B8',
  },
  mainButton: {
    backgroundColor: '#C07918', // Gold/Orange color from design
    borderRadius: 25, // Fully rounded pill shape
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#C07918',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  mainButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
