import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          <View style={styles.spacer60} />

          {/* Card Container */}
          <View style={styles.card}>
            {/* Illustration */}
            <View style={styles.illustrationContainer}>
              <View style={styles.circle}>
                <View style={styles.shieldContainer}>
                  <View style={styles.shield}>
                    <View style={styles.shieldTop} />
                    <View style={styles.shieldBottom} />
                  </View>
                  <View style={styles.lockCircle}>
                    <View style={styles.lockBody}>
                      <View style={styles.lockArc} />
                    </View>
                  </View>
                  <View style={styles.keyCircle}>
                    <Text style={styles.keyIcon}>🔑</Text>
                  </View>
                </View>
                {/* Decorative Elements */}
                <View style={[styles.decorDot, { top: 20, left: 30 }]} />
                <View style={[styles.decorDot, { top: 40, right: 40 }]} />
                <View style={[styles.decorDot, { bottom: 30, left: 50 }]} />
                <View style={[styles.decorLine, { top: 50, left: 20 }]} />
                <View style={[styles.decorLine, { bottom: 40, right: 30 }]} />
              </View>
            </View>

            <View style={styles.spacer32} />

            {/* Title */}
            <Text style={styles.title}>Reset Password</Text>

            <View style={styles.spacer8} />

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Set a name for your profile, here's{'\n'}
            </Text>

            <View style={styles.spacer32} />

            {/* New Password Field */}
            <Text style={styles.label}>New Password</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIconText}>🔑</Text>
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
                <Text style={styles.eyeIconText}>
                  {isNewPasswordVisible ? '👁️' : '👁️‍🗨️'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.spacer24} />

            {/* Confirm Password Field */}
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIconText}>🔑</Text>
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
                <Text style={styles.eyeIconText}>
                  {isConfirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.spacer32} />

            {/* Submit Button */}
            <TouchableOpacity
              style={[styles.submitButton, !isFormValid && styles.submitButtonDisabled]}
              onPress={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              activeOpacity={0.8}
            >
              {isSubmitting ? (
                <View style={styles.submitLoading}>
                  <ActivityIndicator color="white" size="small" />
                  <Text style={styles.submitButtonText}>  Submiting</Text>
                </View>
              ) : (
                <Text style={[styles.submitButtonText, !isFormValid && styles.submitButtonTextDisabled]}>
                  Submiting
                </Text>
              )}
            </TouchableOpacity>

            <View style={styles.spacer40} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },
  backButton: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  spacer60: {
    height: 60,
  },
  spacer40: {
    height: 40,
  },
  spacer32: {
    height: 32,
  },
  spacer24: {
    height: 24,
  },
  spacer8: {
    height: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  illustrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  shieldContainer: {
    position: 'relative',
    width: 80,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shield: {
    width: 60,
    height: 70,
    position: 'relative',
  },
  shieldTop: {
    width: 60,
    height: 50,
    backgroundColor: '#D4A441',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  shieldBottom: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#D4A441',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  lockCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#8BC4C4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
  },
  lockBody: {
    width: 14,
    height: 14,
    backgroundColor: 'white',
    borderRadius: 3,
    position: 'relative',
  },
  lockArc: {
    width: 10,
    height: 8,
    borderWidth: 2,
    borderColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 0,
    position: 'absolute',
    top: -8,
    left: 0,
  },
  keyCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#8BC4C4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: -10,
  },
  keyIcon: {
    fontSize: 14,
  },
  decorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFC670',
    position: 'absolute',
  },
  decorLine: {
    width: 12,
    height: 2,
    backgroundColor: '#FFC670',
    borderRadius: 1,
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 13,
    color: '#B0B0B0',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 24,
    paddingHorizontal: 20,
    height: 56,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  inputIconText: {
    fontSize: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    paddingVertical: 0,
  },
  eyeIcon: {
    padding: 8,
  },
  eyeIconText: {
    fontSize: 20,
  },
  submitButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#D4A441',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#E8E8E8',
  },
  submitLoading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  submitButtonTextDisabled: {
    color: '#C0C0C0',
  },
});

export default ResetPasswordPage;