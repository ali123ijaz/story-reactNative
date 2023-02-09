import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Stories from '../Screens/Stories';
import Store from '../Screens/Store';
import FacebookStories from '../Screens/FacebookStories';
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Store" component={Store} />
            {/* <Stack.Screen name="FacebookStories" component={FacebookStories} /> */}
            <Stack.Screen name="Stories" component={Stories} />
        </Stack.Navigator>
    );
};

export default AppStack;