import React, { useState, useEffect, useRef } from 'react';
import ForgotPasswordCodeImg from '../../assets/images/all_icons/forgot_password_code.png';
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

const ForgotPasswordCodePage = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(43);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto focus next input
    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleContinue = () => {
    const fullCode = code.join('');
    if (fullCode.length === 4) {
      navigation.navigate('ResetPassword');
    }
  };

  const handleResend = () => {
    setTimer(43);
    setCode(['', '', '', '']);
  };

  const isFormValid = code.every(digit => digit !== '');

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
              source={ForgotPasswordCodeImg} 
              style={styles.illustrationImage}
              resizeMode="contain"
            />
          </View>

          {/* White Card */}
          <View style={styles.whiteCard}>
            {/* Title */}
            <Text style={styles.title}>Enter Code</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Enter the 6-digit verification sent to{'\n'}dummy@gmail.com
            </Text>

            {/* Code Input Boxes */}
            <View style={styles.codeContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  style={styles.codeBox}
                  value={digit}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                />
              ))}
            </View>

            {/* Resend Code */}
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Resend code in </Text>
              <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
                <Text style={[styles.resendTimer, timer === 0 && styles.resendActive]}>
                  {timer} second
                </Text>
              </TouchableOpacity>
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  codeBox: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  resendText: {
    fontSize: 14,
    color: '#999999',
  },
  resendTimer: {
    fontSize: 14,
    color: '#7DD3C0',
    fontWeight: '600',
  },
  resendActive: {
    color: '#FFA500',
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

export default ForgotPasswordCodePage;