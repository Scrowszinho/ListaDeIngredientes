import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import AboutScreen from '../views/AboutScreen';
import {Button, Image} from '../styles/Styles';

const MainStack = createStackNavigator();

export default () => (

        <MainStack.Navigator>
            <MainStack.Screen name='Home' component={HomeScreen} />
        </MainStack.Navigator>
    )
