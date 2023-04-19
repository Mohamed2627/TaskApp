/* eslint-disable prettier/prettier */
import React from 'react';
import BottomTabs from './bottomTab/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'bottomTabscreen'}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="bottomTabscreen" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Root;
