import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';

//import {Video} from 'react-native-video';

const width = Dimensions.get('screen').width;

const Share = ({onPressShare}) => {
  return (
    <View>
      <TouchableOpacity style={styles.shareIcon} onPress={onPressShare}>
        <Text style={{fontWeight: '900', color: 'black'}}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stories = ({onPressShare}) => {
  const navigation = useNavigation();
  const [content, setContent] = useState([
    {
      id: 1,
      content: require('../assets/img1.jpg'),
      type: 'image',
      finish: 0,
    },
    {
      id: 2,
      content: require('../assets/img2.jpeg'),
      type: 'image',
      finish: 0,
    },
    {
      id: 3,
      content: require('../assets/vd1.mp4'),
      type: 'video',
      finish: 0,
    },
    {
      id: 4,
      content: require('../assets/67.mp4'),
      type: 'video',
      finish: 0,
    },
    {
      id: 5,
      content: require('../assets/img4.jpg'),
      type: 'image',
      finish: 0,
    },
  ]);
  const [current, setCurrent] = useState(0);
  const [load, setLoad] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;

  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef(null);

  // useEffect(()=> {
  //   if(videoLoaded){
  //     setVideoDuration(videoDuration);
  //   }
  // }, []);

  // const handleLoadedMetaData = () => {
  //   const video = videoRef.current;
  //   if (!video) return;
  //   console.log(`the video is ${video.duration} seconds long.`)
  // }

  // const video = new Video(require('../assets/67.mp4'));
  // video.getDuration((duration) => {
  //   console.log('duration: ', duration);
  // });

  // useEffect(() => {
  //   Video.getDuration(content[current].content).then(setVideoDuration);
  // }, []);

  // useEffect(() => {
  //   const getVideoDuration = async () => {
  //     try {
  //       const {duration} = await Video.getDurationAsync(
  //         content[current].content,
  //       );
  //       setVideoDuration(duration);
  //     } catch (error) {
  //       console.error('error');
  //     }
  //   };

  //   getVideoDuration();
  // }, [content[current].content]);

  // useEffect(() => {
  //   if (content[current].type == 'video' && videoDuration > 0) {
  //     setLoad(true);
  //     start(videoDuration);
  //   } else {
  //     setLoad(false);
  //   }
  // }, [current]);

  const onLoad = ({duration}) => {
    setVideoDuration(duration);
  };
  useEffect(() => {
    if (content[current].content == 'video') {
      videoRef.current.seek(0);
    }
  }, [videoDuration]);

  // useEffect(() => {
  //    setDuration = (data) => {
  //     setVideoDuration(data.duration);
  //     if (videoDuration > 0){
  //       setLoad(true);
  //       start(videoDuration);
  //     }
  //   };

  //   return () => {
  //     setDuration = null;
  //   };
  // }, []);

  if (content[current].type == 'video') {
    console.log('Duration: ', videoDuration);
  }

  const handleVideoLoad = () => {
    if (videoDuration > 0) {
      setLoad(true);
      start(videoDuration);
    }
  };
  //  {  const onLoadEnd = data => {
  //       setVideoDuration(data.duration);
  //   }

  //   const handleVideoEnd = () => {
  //     progress.setValue(0);
  //     setLoad(false);
  //   };}

  const start = x => {
    if (content[current].type == 'video') {
      if (load == true) {
        Animated.timing(progress, {
          toValue: 1,
          duration: x,
          useNativeDriver: false,
        }).start(({finished}) => {
          if (finished) {
            next();
          }
        });
      }
    } else {
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }).start(({finished}) => {
        if (finished) {
          next();
        }
      });
    }
  };

  const play = () => {
    start();
  };

  const next = () => {
    if (current !== content.length - 1) {
      let tempData = [...content];
      tempData[current].finish = 1;
      setContent(tempData);

      setCurrent(current + 1);
      progress.setValue(0);
      setLoad(false);
    } else {
      close();
    }
  };

  const previous = () => {
    if (current - 1 >= 0) {
      let tempData = [...content];
      tempData[current].finish = 0;
      setContent(tempData);

      setCurrent(current - 1);
      progress.setValue(0);
      setLoad(false);
    } else {
      close();
    }
  };

  const close = () => {
    progress.setValue(0);
    setLoad(false);
    navigation.goBack();
    console.log('close icon pressed');
  };

  return (
    <View style={{backgroundColor: 'rgba(5, 5, 5, 0.55)'}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View>
        {content[current].type == 'video' ? (
          <Video
            source={content[current].content}
            ref={videoRef}
            controls={true}
            // onLoad={(data) => {
            //   setVideoDuration(data.duration);
            //   setVideoLoaded(true);
            //   setLoad(true);
            //   if (videoDuration > 0){
            //     start(videoDuration)
            //   }
            // }}
            onLoad={onLoad}
            // onLoad={() =>{
            // setLoad(true)
            // start(videoDuration)
            // }}
            //onLoad={({ duration: videoDuration }) => vid = videoDuration }
            // onLoadStart={onLoadEnd}
            // onLoad={data => {
            //   //setVideoDuration(data.duration);
            //   setLoad(true);
            //   play();
            // }}
            // rate= {1.0}
            // volume={1.0}
            //onLoad={handleVideoLoad}
            // shouldPlay={true}
            resizeMode="cover"
            //onLoadEnd={onLoadEnd}
            // onEnd={handleVideoEnd}
            //paused={false}
            // onload={data => {
            //   setVideoDuration(data.duration);
            //   // if(videoDuration > 0){
            //    setLoad(true);
            //    start(videoDuration);}
            // }
            repeat={false}
            style={{height: '100%', width: width}}
          />
        ) : (
          <Image
            source={content[current].content}
            onLoadEnd={() => {
              progress.setValue(0);
              play();
            }}
            style={{width: width, height: '100%', resizeMode: 'center'}}
          />
        )}
      </View>
      <View style={styles.statusTopView}>
        {content.map((index, key) => {
          return (
            <View key={key} style={styles.statusTopItem}>
              <Animated.View
                style={{
                  flex: current === key ? progress : content[key].finish,
                  height: 3,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
              />
            </View>
          );
        })}
      </View>

      <View style={styles.statusButtonView}>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => {
            previous();
            // if (current > 0) {
            //     setCurrent(current - 1);
            // }
          }}
        />

        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => {
            next();
            // if (current !== content.length - 1) {
            //     setCurrent(current + 1);
            // }
          }}
        />
      </View>

      <View style={styles.shareButton}>
        {content.map((story, index) => (
          <Share onPressShare={() => onPressShare(story)} />
        ))}
      </View>

      <View style={styles.statusBckView}>
        <TouchableOpacity
          onPress={() => {
            close();
          }}>
          <Icon
            style={styles.StausBack}
            name="comments"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  statusButtonView: {
    width: width,
    height: '100%',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusButton: {
    width: '30%',
    height: '100%',
  },
  statusTopView: {
    width: width,
    display: 'flex',
    position: 'absolute',
    top: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusTopItem: {
    flex: 1,
    height: 3,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    marginLeft: 3,
    marginRight: 3,
  },
  statusBckView: {
    width: width,
    height: 50,
    flexDirection: 'row-reverse',
    position: 'absolute',
    top: 30,
  },
  StausBack: {
    width: 34,
    height: 34,
    borderRadius: 12,
    marginRight: 15,
  },
  shareIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 5,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 23,
  },
  shareButton: {
    width: '23%',
    height: 50,
    position: 'absolute',
    top: 60,
  },
});
