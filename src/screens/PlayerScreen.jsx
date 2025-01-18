import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/Fonts';

const imageUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/833/325x325/mortals-funk-remix-sped-up-1737075655-r7mO3BxdHM.jpg';
const PlayerScreen = () => {
  const isLiked = true;
  const isMute = true;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} />
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign
            name={'arrowleft'}
            color={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Playing Now</Text>
      </View>

      {/* image */}
      <View style={styles.coverImageContainer}>
        <Image source={{uri: imageUrl}} style={styles.coverImage} />
      </View>

      <View style={styles.titleRowHeartContainer}>
        <View />
        {/* song details */}
        <View styles={styles.songDetailsContainer}>
          <Text style={styles.title}>Believer</Text>
          <Text style={styles.artist}>IMAGINE DRAGON</Text>
        </View>

        {/* heart icon */}
        <TouchableOpacity>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            color={colors.iconSecondary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
      </View>

      {/* player control continer */}
      <View style={styles.playerControlContainer}>
        <TouchableOpacity>
          <Feather
            name={isMute ? 'volume-x' : 'volume-1'}
            color={colors.iconSecondary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    color: colors.textPrimary,
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.medium,
    flex: 1,
    textAlign: 'center',
  },
  coverImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xl,
  },
  coverImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  titleRowHeartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  songDetailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.xl,
    fontFamily: fontFamilies.medium,
    textAlign: 'center',
    paddingVertical: spacing.xs,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: fontSize.md,
    fontFamily: fontFamilies.regular,
    textAlign: 'center',
  },

  playerControlContainer: {},
});

export default PlayerScreen;
