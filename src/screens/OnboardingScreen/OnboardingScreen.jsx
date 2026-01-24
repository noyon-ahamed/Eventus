import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    image: require('../../assets/images/onbording1.png'),
    title: "Take Control of Every Load",
    desc: "Stay updated with your assigned deliveries in real-time.\nView routes, pickup and drop-off details\nall in one simple dashboard."
  },
  {
    image: require('../../assets/images/onbording2.png'),
    title: "Upload, Verify, and Hit the Road",
    desc: "Securely upload your CDL, W-9, and insurance documents.\nOnce verified, you're ready to start\naccepting loads instantly."
  },
  {
    image: require('../../assets/images/onbording3.png'),
    title: "Deliver Loads, Get Paid Fast",
    desc: "Complete your deliveries and receive payments directly through ACH — no paperwork, no delays, just smooth settlements."
  },
];

const FloatingCircle = ({ top, left, right, bottom, size, colors }) => (
  <View
    style={[
      styles.floatingCircle,
      {
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        backgroundColor: colors[0],
      }
    ]}
  />
);

const OnboardingPage = ({ item, index, currentPage }) => (
  <View style={[styles.page, { width }]}>
    <View style={styles.pageContent}>
      <View style={styles.spacer60} />

      {/* Illustration Section */}
      <View style={styles.illustrationContainer}>
        {/* Floating Circles */}
        <FloatingCircle
          top={20}
          left={20}
          size={16}
          colors={['#FEE1D2', '#FA894C']}
        />
        <FloatingCircle
          bottom={20}
          right={20}
          size={24}
          colors={['#D3DAFD', '#3D5BF6']}
        />
        <FloatingCircle
          top={10}
          right={40}
          size={14}
          colors={['#E3F2FF', '#E3F2FF']}
        />

        {/* Main Image Container */}
        <View style={styles.imageCircle}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Floating Icon Badge */}
        <View style={styles.iconBadgeOuter}>
          <View style={styles.iconBadgeInner}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>⊞</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Page Indicator */}
      <View style={styles.dotContainer}>
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentPage === i ? styles.dotActive : styles.dotInactive
            ]}
          />
        ))}
      </View>

      <View style={styles.spacer40} />

      {/* Text Content */}
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.spacer16} />
      <Text style={styles.description}>{item.desc}</Text>
    </View>
  </View>
);

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);



  const goToLogin = () => {
    navigation.replace('RoleSelection');
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const page = Math.round(scrollPosition / width);
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: width * (currentPage + 1),
        animated: true
      });
    } else {
      goToLogin();
    }
  };





  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {onboardingData.map((item, index) => (
            <OnboardingPage
              key={index}
              item={item}
              index={index}
              currentPage={currentPage}
            />
          ))}
        </ScrollView>

        <View style={styles.bottomControls}>
          {/* Next/Get Started Button */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>
              {currentPage === 2 ? "Get Started" : "Next"}
            </Text>
          </TouchableOpacity>

          <View style={styles.spacer12} />

          {/* Skip Button */}
          <TouchableOpacity
            style={styles.skipButton}
            onPress={goToLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.spacer30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4F5',
  },
  content: {
    flex: 1,
    paddingTop: 40,
  },
  scrollView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  pageContent: {
    paddingHorizontal: 30,
  },
  spacer60: {
    height: 60,
  },
  spacer40: {
    height: 40,
  },
  spacer30: {
    height: 30,
  },
  spacer16: {
    height: 16,
  },
  spacer12: {
    height: 12,
  },
  illustrationContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  floatingCircle: {
    position: 'absolute',
    borderRadius: 999,
  },
  imageCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconBadgeOuter: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    elevation: 4,
  },
  iconBadgeInner: {
    padding: 8,
    backgroundColor: '#D0A030',
    borderRadius: 999,
  },
  iconContainer: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: '#3B82F6',
  },
  dotInactive: {
    width: 8,
    backgroundColor: '#D1D5DB',
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#1F2937',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 15,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 22.5,
    fontWeight: '400',
  },
  bottomControls: {
    paddingHorizontal: 30,
  },
  nextButton: {
    width: '100%',
    height: 58,
    borderRadius: 30,
    backgroundColor: '#D0A030',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    width: '100%',
    height: 58,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#D0A130',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OnboardingScreen;