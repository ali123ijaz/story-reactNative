import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';


const Story = ({ brandName, thumbnail, navigation }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Stories');
        }}>
        <View style={styles.storyContainer}>
          <ImageBackground style={styles.thumbnail} source={thumbnail}>
            <Text style={styles.brandName}>{brandName}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
};

const Store = ({ route, navigation }) => {
    const { stories } = route.params;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={({ nativeEvent }) => {
                    const nextActiveIndex = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
                    if (nextActiveIndex !== activeIndex) {
                        setActiveIndex(nextActiveIndex);
                    }
                }}
                scrollEventThrottle={16}
            >
                {stories.map((story, index) => (
                    <Story
                        key={story.id}
                        brandName={story.brandName}
                        thumbnail={story.thumbnail}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  storyContainer: {
    width: 100,
    height: 170,
    backgroundColor: 'rgba(211,211,211,0.5) ',
    
    marginRight: 13,
    marginTop: 3,
    marginLeft: 2,
    
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderWidth: 0.7,
    borderColor: 'solid black',
    borderRadius: 10,
    // marginBottom: 8,
  },
  brandName: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
});

export default Store;