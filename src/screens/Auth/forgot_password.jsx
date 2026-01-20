import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const ForgotPasswordPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (email.trim() !== '') {
      navigation.navigate('ForgotPasswordCode');
    }
  };

  const isFormValid = email.trim() !== '';

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
            <Text style={styles.title}>Forgot Password</Text>

            <View style={styles.spacer8} />

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Set a name for your profile, here's{'\n'}the password
            </Text>

            <View style={styles.spacer32} />

            {/* Email Field */}
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIconText}>✉️</Text>
              <TextInput
                style={styles.input}
                placeholder="dummyemail@gmail.com"
                placeholderTextColor="#C4C4C4"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
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

export default ForgotPasswordPage;