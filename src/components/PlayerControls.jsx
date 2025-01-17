import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/colors';
import {TouchableOpacity} from 'react-native';
import {iconSizes} from '../constants/dimensions';

export const GoToPreviousButton = ({size = iconSizes.lg}) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <FontAwesome name={'backward'} color={colors.iconPrimary} size={size} />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = ({size = iconSizes.lg}) => {
  const isPlaying = true;
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <FontAwesome6
        name={isPlaying ? 'pause' : 'play'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};

export const GoToNextButton = ({size = iconSizes.lg}) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <FontAwesome name={'forward'} color={colors.iconPrimary} size={size} />
    </TouchableOpacity>
  );
};
