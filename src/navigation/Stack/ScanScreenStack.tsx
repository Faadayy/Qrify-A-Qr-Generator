import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryScreen, PostScanScreen, ScanScreen } from 'screens';

const Stack = createStackNavigator();
const ScanScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="ScanScreen" component={ScanScreen} />
            <Stack.Screen name="PostScanScreen" component={PostScanScreen} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
    )
}

export { ScanScreenStack }

const styles = StyleSheet.create({})