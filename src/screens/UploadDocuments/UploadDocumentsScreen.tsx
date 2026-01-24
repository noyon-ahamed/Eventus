// src/screens/UploadDocuments/UploadDocumentsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../constants/colors';

const UploadDocumentsScreen = ({ navigation }: any) => {
  const [uploadedDocs, setUploadedDocs] = useState({
    bol: false,
    photo: false,
  });

  const handleUpload = (docType: string) => {
    Alert.alert('Upload Document', `Upload ${docType} document`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Upload',
        onPress: () => {
          setUploadedDocs({ ...uploadedDocs, [docType]: true });
        },
      },
    ]);
  };

  const handleSubmit = () => {
    if (uploadedDocs.bol && uploadedDocs.photo) {
      Alert.alert('Success', 'Documents uploaded successfully!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Earnings'),
        },
      ]);
    } else {
      Alert.alert('Error', 'Please upload all required documents');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upload Documents</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Upload Documents</Text>
          <Text style={styles.pageSubtitle}>Submit your delivery proof</Text>
        </View>

        <TouchableOpacity
          style={styles.uploadCard}
          onPress={() => handleUpload('bol')}
        >
          <View style={[styles.uploadIcon, { backgroundColor: Colors.blue + '20' }]}>
            {uploadedDocs.bol ? (
              <Text style={styles.uploadIconText}>✓</Text>
            ) : (
              <Text style={styles.uploadIconText}>📄</Text>
            )}
          </View>
          <Text style={styles.uploadTitle}>Bill of Lading</Text>
          <Text style={styles.uploadSubtitle}>
            {uploadedDocs.bol ? 'Uploaded' : 'Tap to upload BOL'}
          </Text>
          <Text style={styles.uploadFormat}>Support format: PDF, JPG, or PNG</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.uploadCard}
          onPress={() => handleUpload('photo')}
        >
          <View style={[styles.uploadIcon, { backgroundColor: Colors.primary + '20' }]}>
            {uploadedDocs.photo ? (
              <Text style={styles.uploadIconText}>✓</Text>
            ) : (
              <Text style={styles.uploadIconText}>📷</Text>
            )}
          </View>
          <Text style={styles.uploadTitle}>Delivery Photo</Text>
          <Text style={styles.uploadSubtitle}>
            {uploadedDocs.photo ? 'Uploaded' : 'Tap to upload BOL'}
          </Text>
          <Text style={styles.uploadFormat}>Support format: JPG or PNG</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton} onPress={handleSubmit}>
          <Text style={styles.uploadButtonText}>Upload Now</Text>
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
  titleContainer: {
    padding: Spacing.lg,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primaryDark,
    marginBottom: Spacing.xs,
  },
  pageSubtitle: {
    fontSize: FontSizes.md,
    color: Colors.gray,
  },
  uploadCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  uploadIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  uploadIconText: {
    fontSize: 40,
  },
  uploadTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '600',
    color: Colors.primaryDark,
    marginBottom: Spacing.xs,
  },
  uploadSubtitle: {
    fontSize: FontSizes.md,
    color: Colors.blue,
    fontWeight: '500',
    marginBottom: Spacing.xs,
  },
  uploadFormat: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  uploadButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    marginHorizontal: Spacing.md,
    marginTop: Spacing.lg,
  },
  uploadButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default UploadDocumentsScreen;