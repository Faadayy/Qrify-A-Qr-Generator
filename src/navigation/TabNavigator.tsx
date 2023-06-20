import React, { useState } from 'react'
import HomeScreen from './HomeScreenNavigator'
import ScanScreen from 'screens/ScanScreen'
import Settings from 'screens/Settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './TabBar';
import GenerateIcon from 'assets/svgs/GenerateIcon'
import SettingsIcon from 'assets/svgs/SettingsIcon'
import ScanIcon from 'assets/svgs/ScanIcon'
import Animated, { Layout, SlideInRight } from 'react-native-reanimated'
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'


const Tab = createBottomTabNavigator();
const ref = createNavigationContainerRef();

const TabNavigator: React.FC = () => {
    const [routeName, setRouteName] = useState('');
    const hide = routeName == "GenerationScreen"


    const tabs = [
        {
            id: 1,
            name: 'Generate',
            label: 'Generate',
            component: HomeScreen,
            icon: <GenerateIcon />
        },
        {
            id: 2,
            name: 'Scan',
            label: 'Scan',
            component: ScanScreen,
            icon: <ScanIcon />

        },
        {
            id: 3,
            name: 'Settings',
            label: 'Settings',
            component: Settings,
            icon: <SettingsIcon />

        },
    ];

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
                tabBar={(props) =>
                    <TabBar {...props} hide={hide}
                    />}
                initialRouteName={'Home'}
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { display: hide ? "none" : "flex" }
                }}
            >
                {tabs.map((_, index) => {
                    return (
                        <Tab.Screen
                            key={_.id}
                            name={_.name}
                            component={_.component}
                            options={{
                                tabBarLabel: _.label,
                                tabBarIcon: {
                                    icon: _.icon,

                                },
                            }}
                        />
                    );
                })}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;