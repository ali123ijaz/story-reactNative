import { View, Text, Image, Animated, TouchableOpacity, Dimensions, StyleSheet, TouchableWithoutFeedback, StatusBar } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
const width  = Dimensions.get('screen').width;

const Share = ({ onPressShare }) => {
    return (
        <View >
            <TouchableOpacity style={styles.shareIcon} onPress={onPressShare}>
                <Text style={{ fontWeight: '900', color: 'black' }}>Share</Text>
            </TouchableOpacity>
        </View>
    );
};


// const FacebookStories = ({ onPressShare }) => {
//     const navigation = useNavigation();
//     const [content, setContent] = useState([
//         {
//             id: 1,
//             content: require('../assets/img1.jpg'),
//             type: 'image',
//             finish: 0,
//         },
//         {
//             id: 2,
//             content: require('../assets/img2.jpeg'),
//             type: 'image',
//             finish: 0,
//         },
//         {
//             id: 3,
//             content: require('../assets/vd1.mp4'),
//             type: 'video',
//             finish: 0,
//         },
//         {
//             id: 4,
//             content: require('../assets/67.mp4'),
//             type: 'video',
//             finish: 0,
//         },
//         {
//             id: 5,
//             content: require('../assets/img4.jpg'),
//             type: 'image',
//             finish: 0,
//         },
//     ]);
//     const progress = useRef(new Animated.Value(0)).current;
//     const [current, setCurrent] = useState(0);
//     const [load, setLoad] = useState(false);
//     const [videoDuration, setVideoDuration] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);

//     // useEffect(() => {
//     //     const getVideoDuration = async() => {
//     //         try {
//     //             const {duration} = await Video.getStatusAsync(content[current].content);
//     //             setVideoDuration(duration);
//     //         } catch (error){
//     //             console.error('error');
//     //         }
//     //     };

//     //     getVideoDuration();
//     // }, []);



//     useEffect(() => {
//         if (content[current].type == 'video' && videoDuration >0){
//             setLoad(true);
//             start(videoDuration)
//         } else {
//             setLoad(false);
//         }
//     }, [current]);

//     const handleVideoLoad = () => {
//         if (videoDuration > 0) {
//             setLoad(true);
//             start(videoDuration);
//         }
//     }


//     const onLoadEnd = data => {
//         setVideoDuration(data.duration);
//     }

        
//     if(content[current].type == 'video' ){
//         console.log('Duration: ', videoDuration);
//     }

//     const start = (n) => {
//         if (content[current].type == 'video') {
//             if (load) {
//                 Animated.timing(progress, {
//                     toValue: 1,
//                     duration: n,
//                     useNativeDriver: false,
//                 }).start(({ finished }) => {
//                     if (finished) {
//                         next();
//                     }
//                 });
//             }
//         } else {

//             Animated.timing(progress, {
//                 toValue: 1,
//                 duration: 5000,
//                 useNativeDriver: false,
//             }).start(({ finished }) => {
//                 if (finished) {
//                     next();
//                 }
//             });
//         }
//     };

//     const play = () => {
//         start();
//     };

//     const next = () => {
//         if (current !== content.length - 1) {
//             let tempData = [...content];
//             tempData[current].finish = 1;
//             setContent(tempData);

//             setCurrent(current + 1);
//             progress.setValue(0);
//             setLoad(false);
//         } else {
//             close();
//         }
//     };

//     const previous = () => {
//         if (current - 1 >= 0) {
//             let tempData = [...content];
//             tempData[current].finish = 0;
//             setContent(tempData);

//             setCurrent(current - 1);
//             progress.setValue(0);
//             setLoad(false);
//         } else {
//             close();
//         }
//     };



//     const close = () => {
//         progress.setValue(0);
//         setLoad(false);
//         navigation.goBack();
//         console.log('close icon pressed');
//     };

//     return (
//         <View style={{ backgroundColor: 'rgba(5, 5, 5, 0.55)' }}>
//             <StatusBar backgroundColor="black" barStyle="light-content" />
//             <View>
//                 {content[current].type == 'video' ? (
//                     <Video
//                         source={content[current].content}
//                         //onLoad={({ duration: videoDuration }) => setVideoDuration(videoDuration) }
//                         // onLoadStart={onLoadEnd}
//                         // onLoad={handleVideoLoad}
//                         // rate= {1.0}
//                         // volume={1.0}
//                         // shouldPlay={true}
//                         resizeMode="cover"
//                         //onLoadEnd={onLoadEnd}
//                         //  onLoadEnd={() => {
//                         //     progress.setValue(0);
//                         //     play();
//                         // }}
//                         // paused={false}
//                         onload={(data) => {
//                             setVideoDuration(data.duration);
//                             // if(videoDuration > 0){
//                             // setLoad(true);
//                             // start(videoDuration);}
//                         }}
//                     // controls={false}
//                     // repeat={false}
//                         style={{ height: '100%', width: width }}
//                     />
//                 ) : (
//                     <Image source={content[current].content}
//                         onLoadEnd={() => {
//                             progress.setValue(0);
//                             play();
//                         }}
//                         style={{ width: width, height: '100%', resizeMode: 'center' }} />
//                 )}
//             </View>
//             <View style={styles.statusTopView}>
//                 {content.map((index, key) => {
//                     return (
//                         <View 
//                         key={key}
//                         style={styles.statusTopItem}>
//                             <Animated.View style={{
//                                 flex: current === key ? progress : content[key].finish,
//                                 height: 3,
//                                 backgroundColor: 'rgba(255, 255, 255, 1)',
//                             }} />

//                         </View>
//                     );
//                 })}
//             </View>

//             <View style={styles.statusButtonView}>

//                 <TouchableOpacity style={styles.statusButton}
//                     onPress={() => {
//                         previous();
//                         // if (current > 0) {
//                         //     setCurrent(current - 1);
//                         // }
//                     }} />

//                 <TouchableOpacity style={styles.statusButton}
//                     onPress={() => {
//                         next();
//                         // if (current !== content.length - 1) {
//                         //     setCurrent(current + 1);
//                         // }
//                     }} />
//             </View>


//             <View style={styles.shareButton}>
//                 {content.map((story, index) => (
//                     <Share
//                         onPressShare={() => onPressShare(story)}
//                     />
//                 ))}
//             </View>


//             <View style={styles.statusBckView}>
//                 <TouchableOpacity onPress={() => {
//                     close();
//                 }}>
//                     <Image style={styles.StausBack} source={require('../assets/img7.jpg')} />
//                 </TouchableOpacity>
//             </View>


//         </View>
//     );
// };



// import React, { useState, useEffect } from 'react';
// import { View, Image, Video, TouchableOpacity } from 'react-native';

const FacebookStories = (  ) => {
    const navigation = useNavigation();
    const [sources, setContent] = useState([
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
  const [index, setIndex] = useState(0);
  const [isVideo, setIsVideo] = useState(false);
  const [duration, setDuration] = useState(0);
  const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    setIsVideo(sources[index].type === 'video');
    setDuration(sources[index].duration || 5);
    setShowStory(true);
  }, [index, sources]);

  const onLeftPress = () => {
    setShowStory(false);
    setTimeout(() => setIndex(index === 0 ? sources.length - 1 : index - 1), 300);
  };

  const onRightPress = () => {
    setShowStory(false);
    setTimeout(() => setIndex(index === sources.length - 1 ? 0 : index + 1), 300);
  };

  return (
    <View style={{ flex: 1 }}>
      {showStory && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {isVideo ? (
            <Video source={sources[index].content} style={{ width: '100%', height: '100%' }} />
          ) : (
            <Image source={sources[index].content} style={{ width: '100%', height: '100%' }} />
          )}
        </View>
      )}
      <View style={{ position: 'absolute', left: 20, bottom: 20 }}>
        <TouchableOpacity onPress={onLeftPress}>
          <Image source={require('../assets/img.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', right: 20, bottom: 20 }}>
        <TouchableOpacity onPress={onRightPress}>
          <Image source={require('../assets/img.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default FacebookStories;


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
    }

})