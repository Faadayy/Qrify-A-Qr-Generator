import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef, useEffect, useState } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();
import HomeScreen from './HomeScreenNavigator'
import ScanScreen from 'screens/ScanScreen'
import Settings from 'screens/Settings'
import { StyleSheet, View, Animated } from 'react-native'
import { TextBold } from 'components';
import SettingsIcon from 'assets/svgs/SettingsIcon';
import ScanIcon from 'assets/svgs/ScanIcon';
import GenerateIcon from 'assets/svgs/GenerateIcon';
import Colors from 'constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
const ref = createNavigationContainerRef();

const Tabs = () => {

    const [routeName, setRouteName] = useState('');
    const hide = routeName == "GenerationScreen"


    return (
        <NavigationContainer
            ref={ref}
            onReady={() => {
                setRouteName(ref.getCurrentRoute().name)
            }}
            onStateChange={async () => {
                const currentRouteName = ref.getCurrentRoute()?.name;
                setRouteName(currentRouteName);
            }}>

            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: heightPercentageToDP(2),
                        left: widthPercentageToDP(4),
                        right: widthPercentageToDP(3),
                        borderRadius: 15,
                        elevation: 0,
                        backgroundColor: '#4F709C',
                        height: heightPercentageToDP(9),
                        ...styles.shadow,
                        display: hide ? "none" : "flex"
                    }
                }}>

                <Tab.Screen
                    name='HomeScreenMain'
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={[focused && styles.TabBarIcon,
                            {
                                justifyContent: 'center', alignItems: 'center',
                                backgroundColor: focused && '#4F709C',
                                bottom: focused ? heightPercentageToDP(3) : 0
                            }]}>
                                <GenerateIcon />
                                <TextBold style={styles.tabText}>Create</TextBold>
                            </View >
                        ),
                    }}
                />
                < Tab.Screen
                    name='ScanScreenMain'
                    component={ScanScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={[focused && styles.TabBarIcon,
                            {
                                justifyContent: 'center', alignItems: 'center',
                                backgroundColor: focused && '#4F709C',
                                bottom: focused ? heightPercentageToDP(3) : 0
                            }]}>
                                <ScanIcon />
                                <TextBold style={styles.tabText}>Scan</TextBold>
                            </View >
                        )
                    }} />
                < Tab.Screen
                    name='SettingsMain'
                    component={Settings}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={[focused && styles.TabBarIcon,
                            {
                                justifyContent: 'center', alignItems: 'center',
                                backgroundColor: focused && '#4F709C',
                                bottom: focused ? heightPercentageToDP(3) : 0
                            }]}>
                                <SettingsIcon />
                                <TextBold style={styles.tabText}>Settings</TextBold>
                            </View >
                        )
                    }} />
            </Tab.Navigator >
        </NavigationContainer>
    )
}

export default Tabs

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    tabText: {
        color: '#FFF',
        fontSize: RFValue(15),
        lineHeight: heightPercentageToDP(2)
    },
});