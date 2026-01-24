// src/screens/TripStatus/TripStatusScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../constants/colors';

const TripStatusScreen = ({ navigation }: any) => {
  const [currentStatus, setCurrentStatus] = useState(0);
  const [note, setNote] = useState('');

  const statusSteps = [
    { id: 0, label: 'At Pickup\nLocation', icon: 'checkmark-circle', completed: true },
    { id: 1, label: 'Loaded &\nDeparted', icon: 'checkmark-circle', completed: true },
    { id: 2, label: 'Arrived at\nDrop-off', icon: 'truck', completed: false, active: true },
    { id: 3, label: 'Delivered', icon: 'ellipse-outline', completed: false },
  ];

  const handleSubmit = () => {
    if (currentStatus < statusSteps.length - 1) {
      setCurrentStatus(currentStatus + 1);
    } else {
      navigation.navigate('UploadDocuments');
    }
  };

  /* Unused renderStatusStep removed */


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trip Status</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trip Status</Text>
          <Text style={styles.sectionSubtitle}>Update your current trip progress</Text>
        </View>

        <View style={styles.progressContainer}>
          {/* Note: Standard mapping won't easily support the "connector" between items nicely in flux row without logic. 
                 I'll render them manually or with a hack to overlay lines, or simplified row.
                 Design shows lines BEHIND bubbles.
             */}
          <View style={styles.connectorBackground}>
            <View style={styles.connectorLineBackground} />
          </View>

          {statusSteps.map((step) => (
            <View key={step.id} style={styles.stepItem}>
              <View
                style={[
                  styles.stepCircle,
                  step.completed && styles.stepCircleCompleted,
                  step.active && styles.stepCircleActive,
                  !step.completed && !step.active && styles.stepCircleInactive
                ]}
              >
                {step.completed ? (
                  <Icon name="checkmark" size={16} color={Colors.white} />
                ) : step.active ? (
                  <Icon name="truck" size={16} color={Colors.white} />
                ) : (
                  // Empty ring or small dot
                  <View />
                )}
              </View>
              <Text
                style={[
                  styles.stepLabel,
                  (step.completed || step.active) ? styles.stepLabelActive : {}
                ]}
              >
                {step.label}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.currentStatusTitle}>Current Status</Text>
        <View style={styles.currentStatusBadge}>
          <Icon name="location-sharp" size={24} color={Colors.primaryDark} />
          <Text style={styles.currentStatusText}>At Pickup Location</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Delivery Note:</Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textInput}
              value={note}
              onChangeText={setNote}
              placeholder="At Pickup Location"
              placeholderTextColor={Colors.gray}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Update</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
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
    backgroundColor: Colors.white,
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
    padding: Spacing.lg,
  },
  sectionHeader: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    color: Colors.primaryDark,
    marginBottom: Spacing.xs,
  },
  sectionSubtitle: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.xl,
    position: 'relative',
    paddingHorizontal: Spacing.xs,
  },
  connectorBackground: {
    position: 'absolute',
    top: 20, // Half of circle height (40/2)
    left: 40, // Offset to start after first circle roughly
    right: 40, // End before last circle roughly
    height: 4,
    zIndex: -1,
    flexDirection: 'row',
  },
  connectorLineBackground: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.lightGray, // Base gray line
    // Realistically we'd need segments to color them green. 
    // For now, simple gray background line is acceptable or simple implementation.
  },
  stepItem: {
    alignItems: 'center',
    width: 70,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    zIndex: 1,
  },
  stepCircleCompleted: {
    backgroundColor: Colors.green,
    borderColor: Colors.green,
  },
  stepCircleActive: { // The design shows Orange icon background (truck)
    backgroundColor: '#F77F00', // Orange
    borderColor: '#F77F00',
  },
  stepCircleInactive: {
    borderColor: Colors.lightGray, // hollow circle
    backgroundColor: Colors.white,
    borderWidth: 4, // Thicker border for donut effect
  },
  inactiveDot: {
    // nothing inside
  },
  stepLabel: {
    fontSize: 10,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: 14,
  },
  stepLabelActive: {
    color: Colors.primaryDark,
    fontWeight: 'bold',
  },
  currentStatusTitle: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.black, // "Current Status" is black/dark
    marginBottom: 8,
  },
  currentStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F1FC', // Light blue
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  currentStatusText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  formContainer: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    // Design shows input inside a white card-like area
  },
  inputLabel: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: Spacing.md,
  },
  textAreaContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    height: 120,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  textInput: {
    flex: 1,
    fontSize: FontSizes.md,
    color: Colors.primaryDark,
  },
  submitButton: {
    backgroundColor: '#D9912B', // Gold/Orange
    paddingVertical: 18,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  submitButtonText: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default TripStatusScreen;