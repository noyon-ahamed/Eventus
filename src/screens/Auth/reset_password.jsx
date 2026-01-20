import React, { useState } from 'react';
import KeyIcon from '../../assets/images/all_icons/key.png';
import EyeIcon from '../../assets/images/all_icons/eye.png';
import ResetPasswordImg from '../../assets/images/all_icons/reset_password.png';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const ResetPasswordPage = ({ navigation }) => {
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        navigation.navigate('LoginPage');
      }, 2000);
    }
  };

  const isFormValid = newPassword.trim() !== '' && confirmPassword.trim() !== '' && newPassword === confirmPassword;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      {/* Centered Card Container */}
      <View style={styles.centerWrapper}>
        <View style={styles.cardWrapper}>
          {/* Top Illustration */}
          <View style={styles.topIllustration}>
            <Image 
              source={ResetPasswordImg} 
              style={styles.illustrationImage}
              resizeMode="contain"
            />
          </View>

          {/* White Card */}
          <View style={styles.whiteCard}>
            {/* Title */}
            <Text style={styles.title}>Reset Password</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Set a name for your profile, here's{'\n'}the password
            </Text>

            {/* New Password Field */}
            <View style={styles.fieldSection}>
              <Text style={styles.label}>New Password</Text>
              <View style={styles.inputContainer}>
                <Image source={KeyIcon} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#C4C4C4"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry={!isNewPasswordVisible}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                >
                  <Image source={EyeIcon} style={styles.eyeIconImg} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Field */}
            <View style={styles.fieldSection}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <Image source={KeyIcon} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#C4C4C4"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!isConfirmPasswordVisible}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                >
                  <Image source={EyeIcon} style={styles.eyeIconImg} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={[styles.submitButton, isFormValid && styles.submitButtonActive]}
              onPress={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              activeOpacity={0.9}
            >
              {isSubmitting ? (
                <View style={styles.submitLoading}>
                  <ActivityIndicator color="white" size="small" />
                  <Text style={styles.submitButtonText}>  Submitting</Text>
                </View>
              ) : (
                <Text style={[styles.buttonText, isFormValid && styles.buttonTextActive]}>
                  Submit
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
    width: 44,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
  },
  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  cardWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  topIllustration: {
    position: 'absolute',
    top: -100,
    zIndex: 10,
  },
  illustrationImage: {
    width: 140,
    height: 220,
  },
  whiteCard: {
    width: width - 48,
    backgroundColor: 'white',
    borderRadius: 32,
    paddingTop: 130,
    paddingHorizontal: 28,
    paddingBottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 40,
  },
  fieldSection: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  inputContainer: {
    height: 58,
    backgroundColor: 'white',
    borderRadius: 29,
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputIcon: {
    width: 20,
    height: 20,
    tintColor: '#AAAAAA',
    marginRight: 12,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    padding: 0,
  },
  eyeIcon: {
    padding: 8,
  },
  eyeIconImg: {
    width: 20,
    height: 20,
    tintColor: '#AAAAAA',
    resizeMode: 'contain',
  },
  submitButton: {
    width: '100%',
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    marginTop: 8,
  },
  submitButtonActive: {
    backgroundColor: '#D4A441',
    shadowColor: '#D4A441',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  submitLoading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#AAAAAA',
  },
  buttonTextActive: {
    color: 'white',
  },
});

export default ResetPasswordPage;