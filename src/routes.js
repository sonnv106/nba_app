import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    NavigationAction,
    container,
    NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';

const Tab = createBottomTabNavigator();
const TabStack = () => (
    <Tab.Navigator>
        <Tab.Screen name="News" component={News} options={{
            headerShown: false
        }} />
        <Tab.Screen name="Games" component={Games} options={{
            headerShown: false
        }} />
    </Tab.Navigator>
);

const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth'>
                <Stack.Screen name="Auth" component={SignIn} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="TabStack" component={TabStack} options={{
                    headerShown: true
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
