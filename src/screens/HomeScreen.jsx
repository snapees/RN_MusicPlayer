import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import {fontFamilies} from '../constants/Fonts';
import {fontSize, spacing} from '../constants/dimensions';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} />
      <Header />
      <Text style={styles.headingText}>Recommended for you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headingText: {
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    paddingVertical: spacing.lg,
  },
});

export default HomeScreen;
