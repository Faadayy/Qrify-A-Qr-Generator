import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { GenerationScreen, HomeScreen, ScanScreen } from 'screens';

const Stack = createStackNavigator();
const ScanScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,

        }}>
            <Stack.Screen name="ScanScreen" component={ScanScreen} />
            {/* <Stack.Screen name="GenerationScreen" component={GenerationScreen} /> */}
        </Stack.Navigator>
    )
}

export { ScanScreenStack }

const styles = StyleSheet.create({})