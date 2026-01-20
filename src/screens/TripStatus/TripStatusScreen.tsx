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
import { Colors, FontSizes, Spacing, BorderRadius } from '../../constants/colors';

const TripStatusScreen = ({ navigation }: any) => {
  const [currentStatus, setCurrentStatus] = useState(0);
  const [note, setNote] = useState('At Pickup Location');

  const statusSteps = [
    { id: 0, label: 'At Pickup\nLocation', icon: '✓', completed: true },
    { id: 1, label: 'Loaded &\nDeparted', icon: '✓', completed: true },
    { id: 2, label: 'Arrived at\nDrop-off', icon: '🚚', completed: false, active: true },
    { id: 3, label: 'Delivered', icon: '○', completed: false },
  ];

  const handleSubmit = () => {
    if (currentStatus < statusSteps.length - 1) {
      setCurrentStatus(currentStatus + 1);
    } else {
      navigation.navigate('UploadDocuments');
    }
  };

  const renderStatusStep = (step: any, index: number) => {
    const isActive = step.active;
    const isCompleted = step.completed;

    return (
      <View key={step.id} style={styles.stepContainer}>
        <View
          style={[
            styles.stepCircle,
            isCompleted && styles.stepCircleCompleted,
            isActive && styles.stepCircleActive,
          ]}
        >
          {isCompleted ? (
            <Text style={styles.stepIconCompleted}>✓</Text>
          ) : isActive ? (
            <Text style={styles.stepIconActive}>{step.icon}</Text>
          ) : (
            <Text style={styles.stepIconInactive}>{step.icon}</Text>
          )}
        </View>
        <Text
          style={[
            styles.stepLabel,
            (isCompleted || isActive) && styles.stepLabelActive,
          ]}
        >
          {step.label}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trip Status</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trip Status</Text>
            <Text style={styles.sectionSubtitle}>Update your current trip progress</Text>
          </View>

          <View style={styles.progressContainer}>
            {statusSteps.map((step, index) => renderStatusStep(step, index))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.currentStatusTitle}>Current Status</Text>
          <View style={styles.currentStatusBadge}>
            <Text style={styles.currentStatusIcon}>📍</Text>
            <Text style={styles.currentStatusText}>At Pickup Location</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.inputLabel}>Delivery Note:</Text>
          <TextInput
            style={styles.textInput}
            value={note}
            onChangeText={setNote}
            placeholder="At Pickup Location"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
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
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    margin: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeader: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
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
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
  },
  stepCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  stepCircleCompleted: {
    backgroundColor: Colors.green,
    borderColor: Colors.green,
  },
  stepCircleActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  stepIconCompleted: {
    fontSize: 24,
    color: Colors.white,
  },
  stepIconActive: {
    fontSize: 24,
    color: Colors.white,
  },
  stepIconInactive: {
    fontSize: 24,
    color: Colors.gray,
  },
  stepLabel: {
    fontSize: FontSizes.xs,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: 16,
  },
  stepLabelActive: {
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  currentStatusTitle: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.primaryDark,
    marginBottom: Spacing.md,
  },
  currentStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryLight,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
  },
  currentStatusIcon: {
    fontSize: 24,
  },
  currentStatusText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  inputLabel: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.primaryDark,
    marginBottom: Spacing.sm,
  },
  textInput: {
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    fontSize: FontSizes.md,
    color: Colors.primaryDark,
    minHeight: 100,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    marginHorizontal: Spacing.md,
    marginTop: Spacing.md,
  },
  submitButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default TripStatusScreen;