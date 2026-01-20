import React, { useState } from 'react';
import EmailIcon from '../../assets/images/all_icons/email.png';
import ForgotPasswordImg from '../../assets/images/all_icons/forgotpassword.png';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const ForgotPasswordPage = ({ navigation }) => {
  const [email, setEmail] = useState('dummyemail@gmail.com');

  const handleContinue = () => {
    if (email.trim() !== '' && email.includes('@')) {
      navigation.navigate('ForgotPasswordCode');
    }
  };

  const isFormValid = email.trim() !== '' && email.includes('@');

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
              source={ForgotPasswordImg} 
              style={styles.illustrationImage}
              resizeMode="contain"
            />
          </View>

          {/* White Card */}
          <View style={styles.whiteCard}>
            {/* Title */}
            <Text style={styles.title}>Forgot Password</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Set a name for your profile, here's{'\n'}the password
            </Text>

            {/* Email Field */}
            <View style={styles.emailSection}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <Image source={EmailIcon} style={styles.emailIcon} />
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              style={[styles.continueButton, isFormValid && styles.continueButtonActive]}
              onPress={handleContinue}
              disabled={!isFormValid}
              activeOpacity={0.9}
            >
              <Text style={[styles.buttonText, isFormValid && styles.buttonTextActive]}>
                Continue
              </Text>
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
    paddingBottom: 140,
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
  emailSection: {
    marginBottom: 32,
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
  emailIcon: {
    width: 22,
    height: 22,
    tintColor: '#AAAAAA',
    marginRight: 14,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    padding: 0,
  },
  continueButton: {
    width: '100%',
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  continueButtonActive: {
    backgroundColor: '#D4A441',
    shadowColor: '#D4A441',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
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

export default ForgotPasswordPage;