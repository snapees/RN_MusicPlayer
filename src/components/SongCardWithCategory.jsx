import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SongCard from './SongCard';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/Fonts';

const SongCardWithCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Recommended for you</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={SongCard}
        horizontal={true}
        ItemSeparatorComponent={<View style={{marginHorizontal: spacing.sm}} />}
        contentContainerStyle={{paddingHorizontal: spacing.lg}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
});

export default SongCardWithCategory;
