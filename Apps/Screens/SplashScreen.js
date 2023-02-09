import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import LayOut from '../Components/LayOut';
import CustomButton from '../Components/CustomButton';
import Stories from './Stories';
const SplashScreen = ({ navigation }) => {

    const mmyData = [
        {
            id: 1,
            thumbnail: require('../assets/thumbnail1.jpg'),
            brandName: 'Brand 1',
        },
        {
            id: 2,
            thumbnail: require('../assets/thumbnail2.jpg'),
            brandName: 'Brand 2',
        },
        {
            id: 3,
            thumbnail: require('../assets/thumbnail3.jpg'),
            brandName: 'Brand 3',
        },
        {
            id: 4,
            thumbnail: require('../assets/thumbnail4.jpeg'),
            brandName: 'Brand 4',
        },
        {
            id: 5,
            thumbnail: require('../assets/thumbnail5.jpg'),
            brandName: 'Brand 5',
        },
        {
            id: 6,
            thumbnail: require('../assets/thumbnail6.jpeg'),
            brandName: 'Brand 6',
        },
        {
            id: 7,
            thumbnail: require('../assets/thumbnail7.jpeg'),
            brandName: 'Brand 7',
        },
        {
            id: 8,
            thumbnail: require('../assets/thumbnail8.jpg'),
            brandName: 'Brand 8',
        },

    ]

    return ( 
        <LayOut>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/splash.jpeg')} />
                <Text style={styles.txtStyle}>Lets Get Started By Clicking Below</Text>
                <View style={styles.buttonView}>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate('Store', { stories: mmyData });
                            //   // await AsyncStorage.setItem('userHasViewedSplashScreen', 'yes');

                            //   // navigation.reset({
                            //   //   index: 0,
                            //   //   routes: [{ name: 'Login Now' }],
                            //   // });
                        }}
                        title={'Lets Go'}
                    />
                </View>
            </View>
        </LayOut>
    );
};

export default SplashScreen;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: '50%',
    },
    txtStyle: {
        fontSize: 20,
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
    },
    buttonView: {
        width: '100%',
        paddingLeft: 80,
        paddingRight: 80,
        flexDirection: 'column-reverse',
        flex: 1,
        marginBottom: '30%',
    },

});