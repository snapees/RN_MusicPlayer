/* eslint-disable react-native/no-inline-styles */
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';
import {songsWithCategory} from '../data/songsWithCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} />
      <Header />
      <FlatList
        data={songsWithCategory}
        renderItem={SongCardWithCategory}
        contentContainerStyle={{paddingBottom: 400}}
      />
      <FloatingPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
