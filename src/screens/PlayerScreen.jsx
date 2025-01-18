import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/Fonts';

const PlayerScreen = () => {
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
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headingText: {
    color: colors.textPrimary,
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.medium,
    flex: 1,
    textAlign: 'center',
  },
});

export default PlayerScreen;
