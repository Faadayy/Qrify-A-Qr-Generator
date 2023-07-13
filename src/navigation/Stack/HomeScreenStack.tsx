import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { GenerationScreen, HomeScreen } from 'screens';

const Stack = createStackNavigator();
const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
            headerShown: false,

        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="GenerationScreen" component={GenerationScreen} />
        </Stack.Navigator>
    )
}

export { HomeScreenNavigator }

