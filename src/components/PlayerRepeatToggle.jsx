import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';
import {iconSizes} from '../constants/dimensions';
import {TouchableOpacity} from 'react-native';

const PlayerRepeatToggle = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name={'repeat'}
        // name={isMute ? 'volume-x' : 'volume-1'}
        color={colors.iconSecondary}
        size={iconSizes.lg}
      />
    </TouchableOpacity>
  );
};

export default PlayerRepeatToggle;
