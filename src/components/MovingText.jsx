/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const MovingText = ({text, animationThreshold, style}) => {
  const translateX = useSharedValue(0);
  const shouldAnimate = text.length >= animationThreshold;
  const textWidth = text.length * 3;

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }
    // we have to make animation
    translateX.value = withDelay(
      1000,
      withRepeat(
        withTiming(-textWidth, {duration: 5000, easing: Easing.linear}),
        -1, // infinite time
        true, // should reverse or not
      ),
    );

    // translateX.value = withTiming(-textWidth, {
    //   duration: 5000,
    //   easing: Easing.linear,
    // });
    return () => {
      cancelAnimation(translateX);
      translateX.value = 0;
    };
  }, [translateX, text, animationThreshold, textWidth, shouldAnimate]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        animatedStyle,
        style,
        shouldAnimate && {
          width: 9999,
          paddingLeft: 16,
        },
      ]}>
      {text}
    </Animated.Text>
  );
};

export default MovingText;
