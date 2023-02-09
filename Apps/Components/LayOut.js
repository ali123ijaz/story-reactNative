import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

export default function LayOut({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
            {children}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        flex: 1,
    },
    circle1: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: -80,
        left: -13,
        borderRadius: 100,
        backgroundColor: 'rgba(75, 0, 130, 0.40)',

    },
    circle2: {
        position: 'absolute',
        backgroundColor: 'rgba(75, 0, 130, 0.40)',
        width: 200,
        height: 200,
        top: -13,
        left: -80,
        borderRadius: 100,
    },

});