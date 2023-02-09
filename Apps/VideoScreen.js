import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Video source={require('./assets/67.mp4')}
      style={styles.videoStyle}
      />
    </View>
  )
}

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})