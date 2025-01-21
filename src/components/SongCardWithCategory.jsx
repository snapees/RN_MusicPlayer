import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SongCard from './SongCard';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/Fonts';
import TrackPlayer from 'react-native-track-player';

const SongCardWithCategory = ({item}) => {
  // create a function that will play a song in queue
  const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
    // make a queue and play of songs
    const trackIndex = songs.findIndex(
      track => track.url === selectedTrack.url,
    );
    // if track does not exist
    if (trackIndex === -1) {
      return;
    }
    // play the track
    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);
    // // console.log('Before tracks', beforeTracks);
    // console.log('After tracks', afterTracks);
    await TrackPlayer.reset();
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);

    await TrackPlayer.play();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{item.title}</Text>
      <FlatList
        data={item.songs}
        renderItem={({item}) => (
          <SongCard
            item={item}
            handlePlay={selectedTrack => {
              handlePlayTrack(selectedTrack);
            }}
          />
        )}
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
