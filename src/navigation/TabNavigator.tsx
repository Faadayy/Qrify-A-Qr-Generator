import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef, useEffect } from 'react';
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

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const Tabs = () => {
    const animation = new Animated.Value(0);


    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: heightPercentageToDP(2),
                    left: widthPercentageToDP(5),
                    right: widthPercentageToDP(5),
                    elevation: 0,
                    backgroundColor: '#4F709C',
                    borderRadius: 15,
                    height: heightPercentageToDP(9),
                    ...styles.shadow
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
                            bottom: focused ? heightPercentageToDP(2) : 0
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
                            bottom: focused ? heightPercentageToDP(2) : 0
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
                            bottom: focused ? heightPercentageToDP(2) : 0
                        }]}>
                            <SettingsIcon />
                            <TextBold style={styles.tabText}>Settings</TextBold>
                        </View >
                    )
                }} />
        </Tab.Navigator >
    )
}

export default Tabs

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    tabText: {
        color: '#F5EFE7',
        lineHeight: heightPercentageToDP(2)
        // backgroundColor: 'red',
        // paddingVertical: 10
    },
    TabBarIcon: {
        borderRadius: RFValue(70),
        height: RFValue(70),
        width: RFValue(70),
        borderWidth: 6,
        borderColor: '#fff',
        // borderLeftWidth: 4,
        // borderLeftColor: '#fff',
        // borderRightWidth: 4,
        // borderRightColor: '#fff'

    }
});