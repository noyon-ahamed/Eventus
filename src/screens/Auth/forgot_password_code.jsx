import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

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
                <View style={styles.documentContainer}>
                  <View style={styles.document}>
                    <View style={styles.documentLine1} />
                    <View style={styles.documentLine2} />
                    <View style={styles.documentLine3} />
                  </View>
                  <View style={styles.checkCircle}>
                    <Text style={styles.checkMark}>✓</Text>
                  </View>
                </View>
                {/* Decorative Elements */}
                <View style={[styles.decorDot, { top: 30, left: 40, backgroundColor: '#8BC4C4' }]} />
                <View style={[styles.decorDot, { top: 50, right: 35, backgroundColor: '#FFC670' }]} />
                <View style={[styles.decorDot, { bottom: 40, left: 30, backgroundColor: '#FFC670' }]} />
              </View>
            </View>

            <View style={styles.spacer32} />

            {/* Title */}
            <Text style={styles.title}>Enter Code</Text>

            <View style={styles.spacer8} />

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Enter the 6-digit verification sent to{'\n'}dummy@gmail.com
            </Text>

            <View style={styles.spacer32} />

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

            <View style={styles.spacer24} />

            {/* Resend Code */}
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Resend code in </Text>
              <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
                <Text style={[styles.resendTimer, timer === 0 && styles.resendActive]}>
                  {timer} second
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.spacer32} />

            {/* Continue Button */}
            <TouchableOpacity
              style={[styles.continueButton, !isFormValid && styles.continueButtonDisabled]}
              onPress={handleContinue}
              disabled={!isFormValid}
              activeOpacity={0.8}
            >
              <Text style={[styles.continueButtonText, !isFormValid && styles.continueButtonTextDisabled]}>
                Continue
              </Text>
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
  documentContainer: {
    position: 'relative',
    width: 70,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  document: {
    width: 50,
    height: 65,
    backgroundColor: '#D4A441',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
  },
  documentLine1: {
    width: 30,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    marginBottom: 6,
  },
  documentLine2: {
    width: 30,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    marginBottom: 6,
  },
  documentLine3: {
    width: 20,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  checkCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8BC4C4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -5,
    right: -5,
  },
  checkMark: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  decorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  codeBox: {
    width: 60,
    height: 60,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 13,
    color: '#B0B0B0',
  },
  resendTimer: {
    fontSize: 13,
    color: '#8BC4C4',
    fontWeight: '600',
  },
  resendActive: {
    color: '#FFA500',
  },
  continueButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#D4A441',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#E8E8E8',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  continueButtonTextDisabled: {
    color: '#C0C0C0',
  },
});

export default ForgotPasswordCodePage;