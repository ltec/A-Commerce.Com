import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {primary, secondary} from './../assets/colors';
import {treinos, treinosOutline, exercicios, exerciciosOutline} from './../assets/icons';

import Home from './../components/home';
import Goals from './../components/goals';

export default Tabs = createBottomTabNavigator({
    Home: { screen: Home, navigationOptions: ({ navigation }) => ({}) },
    Goals: { screen: Goals, navigationOptions: ({ navigation }) => ({}) },
},
    {
        tabBarPosition: 'bottom',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName = focused ? exercicios : exerciciosOutline;
                        break;
                    case 'Goals':
                        iconName = focused ? treinos : treinosOutline;
                    default:
                        break;
                }

                return <Image source={iconName} style={{ tintColor: tintColor, height: 25, width: 25 }} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: secondary,
            activeBackgroundColor: primary,
            inactiveBackgroundColor: primary,
            inactiveTintColor: secondary,
            labelStyle: {
                fontSize: 12,
            },
        }
    });
