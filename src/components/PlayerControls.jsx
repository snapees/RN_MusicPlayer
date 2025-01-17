import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/colors';
import {TouchableOpacity} from 'react-native';

export const GoToPreviousButton = ({size}) => {
  return (
    <TouchableOpacity>
      <FontAwesome name={'backward'} color={colors.iconPrimary} size={size} />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = ({size}) => {
  return (
    <TouchableOpacity>
      <FontAwesome6
        name={true ? 'pause' : 'play'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};

export const GoToNextButton = ({size}) => {
  return (
    <TouchableOpacity>
      <FontAwesome name={'forward'} color={colors.iconPrimary} size={size} />
    </TouchableOpacity>
  );
};
