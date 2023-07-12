import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { GenerationScreen, HomeScreen } from 'screens';

const Stack = createStackNavigator();
const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,

        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="GenerationScreen" component={GenerationScreen} />
        </Stack.Navigator>
    )
}

export default HomeScreenNavigator

const styles = StyleSheet.create({})