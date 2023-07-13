import { StyleSheet, Vibration, ViewComponent } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from 'screens';

const Stack = createStackNavigator();
const SettingScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,

        }}>
            <Stack.Screen name="SettingsScreen" component={Settings} />
            {/* <Stack.Screen name="GenerationScreen" component={GenerationScreen} /> */}
        </Stack.Navigator>
    )
}

export { SettingScreenStack }

const styles = StyleSheet.create({})