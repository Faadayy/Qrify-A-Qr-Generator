import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './TabBar';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { HomeScreenNavigator, ScanScreenStack, SettingScreenStack } from './Stack';
import { GenerateIcon, ScanIcon, SettingsIcon } from 'assets';


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
            component: HomeScreenNavigator,
            icon: <GenerateIcon />
        },
        {
            id: 2,
            name: 'Scan',
            label: 'Scan',
            component: ScanScreenStack,
            icon: <ScanIcon />

        },
        {
            id: 3,
            name: 'Settings',
            label: 'Settings',
            component: SettingScreenStack,
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
                initialRouteName={'Generate'}
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