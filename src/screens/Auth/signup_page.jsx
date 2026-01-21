import React, { useState } from 'react';
import EmailIcon from '../../assets/images/all_icons/email.png';
import EyeIcon from '../../assets/images/all_icons/eye.png';
import KeyIcon from '../../assets/images/all_icons/key.png';
import UserIcon from '../../assets/images/all_icons/user.png';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

const SignupPage = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (name && email && password && confirmPassword && agreeToTerms) {
      console.log('Sign Up clicked');
      // Navigate to login or home after successful signup
      navigation.navigate('LoginPage');
    }
  };

  const goToLogin = () => {
    navigation.navigate('LoginPage');
  };

  const isFormValid = 
    name.trim() !== '' && 
    email.trim() !== '' && 
    password.trim() !== '' && 
    confirmPassword.trim() !== '' && 
    agreeToTerms;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          <View style={styles.spacer40} />

          {/* Title */}
          <Text style={styles.title}>Create your account</Text>

          <View style={styles.spacer8} />

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Please fill in the details below to get started
          </Text>

          <View style={styles.spacer40} />

          {/* Name Field */}
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputContainer}>
            <Image source={UserIcon} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Input Full Name"
              placeholderTextColor="#C4C4C4"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.spacer24} />

          {/* Email Field */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Image source={EmailIcon} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Input Email"
              placeholderTextColor="#C4C4C4"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.spacer24} />

          {/* Password Field */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Image source={KeyIcon} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Input Password"
              placeholderTextColor="#C4C4C4"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Image source={EyeIcon} style={styles.eyeIconImg} />
            </TouchableOpacity>
          </View>

          <View style={styles.spacer24} />

          {/* Confirm Password Field */}
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <Image source={KeyIcon} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
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

          <View style={styles.spacer16} />

          {/* Terms and Conditions */}
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setAgreeToTerms(!agreeToTerms)}
          >
            <View style={[styles.checkbox, agreeToTerms && styles.checkboxActive]}>
              {agreeToTerms && <View style={styles.checkmarkIcon} />}
            </View>
            <Text style={styles.termsText}>
              I agree to the{' '}
              <Text style={styles.termsLink}>Terms & Conditions</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.spacer32} />

          {/* Sign Up Button */}
          <TouchableOpacity
            style={[styles.signupButton, !isFormValid && styles.signupButtonDisabled]}
            onPress={handleSignUp}
            disabled={!isFormValid}
            activeOpacity={0.8}
          >
            <Text style={[styles.signupButtonText, !isFormValid && styles.signupButtonTextDisabled]}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={styles.spacer32} />

          {/* Social Sign Up */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or sign up with</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.spacer24} />

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={{ uri: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png' }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>

            <View style={styles.socialSpacer} />

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/731/731985.png' }}
                style={styles.appleIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.spacer40} />

          {/* Login Link */}
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={goToLogin}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.spacer40} />
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
  spacer40: {
    height: 40,
  },
  spacer32: {
    height: 32,
  },
  spacer24: {
    height: 24,
  },
  spacer16: {
    height: 16,
  },
  spacer8: {
    height: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 13,
    color: '#B0B0B0',
    fontWeight: '400',
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
    backgroundColor: 'white',
    borderRadius: 24,
    paddingHorizontal: 20,
    height: 56,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  inputIcon: {
    width: 18,
    height: 18,
    marginRight: 12,
    resizeMode: 'contain',
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
  eyeIconImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkboxActive: {
    backgroundColor: '#D4A441',
    borderColor: '#D4A441',
  },
  checkmarkIcon: {
    width: 10,
    height: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
    transform: [{ rotate: '-45deg' }],
    marginTop: -2,
  },
  termsText: {
    fontSize: 13,
    color: '#808080',
    marginLeft: 8,
  },
  termsLink: {
    color: '#FFA500',
    fontWeight: '600',
  },
  signupButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#D4A441',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonDisabled: {
    backgroundColor: '#E8E8E8',
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  signupButtonTextDisabled: {
    color: '#C0C0C0',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontSize: 14,
    color: '#9CA3AF',
    paddingHorizontal: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButton: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  appleIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  socialSpacer: {
    width: 20,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  loginLink: {
    fontSize: 14,
    color: '#FFA500',
    fontWeight: '600',
  },
});

export default SignupPage;