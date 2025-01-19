import React from 'react';
import {colors} from '../constants/colors';
import {iconSizes} from '../constants/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const PlayerShuffleToggle = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name={'shuffle'}
        // name={isMute ? 'volume-x' : 'volume-1'}
        color={colors.iconSecondary}
        size={iconSizes.lg}
      />
    </TouchableOpacity>
  );
};

export default PlayerShuffleToggle;
