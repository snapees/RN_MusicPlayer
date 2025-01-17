import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/Fonts';

const imageUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/825/325x325/ncs-new-years-mix-2024-with-niviro-1735606855-AonYb4qwxc.jpg';

const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.coverImage} />
      <Text style={styles.title}>New Years Mix 2024</Text>
      <Text style={styles.artist}>Alan Walker</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: spacing.lg,
    height: 320,
    width: 250,
  },
  coverImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
    textAlign: 'center',
    fontSize: fontSize.lg,
    paddingVertical: spacing.sm,
  },
  artist: {
    color: colors.textSecondary,
    fontFamily: fontFamilies.regular,
    textAlign: 'center',
    fontSize: fontSize.md,
    paddingVertical: spacing.xs,
  },
});

export default SongCard;
