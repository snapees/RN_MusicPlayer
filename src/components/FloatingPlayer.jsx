import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/Fonts';
import {
  GoToNextButton,
  GoToPreviousButton,
  PlayPauseButton,
} from './PlayerControls';

const imageUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/820/325x325/gimme-1734570059-e67zlEsw2Y.png';

const FloatingPlayer = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.coverImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chauff & Dust</Text>
        <Text style={styles.artist}>Alan Walker</Text>
      </View>
      <View style={styles.playerControlsContainer}>
        <GoToPreviousButton size={iconSizes.md} />
        <PlayPauseButton size={iconSizes.md} />
        <GoToNextButton size={iconSizes.md} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverImage: {
    width: 70,
    height: 70,
  },
  titleContainer: {
    flex: 1,
    // flexDirection: 'column',
    paddingHorizontal: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.medium,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: fontSize.md,
  },
  playerControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 10,
  },
});

export default FloatingPlayer;
