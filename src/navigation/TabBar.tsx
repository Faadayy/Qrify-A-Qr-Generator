import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
import { TextBold } from 'components';
import { TouchableOpacity } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { GenerateIcon, ScanIcon, SettingsIcon } from 'assets';

const { width } = Dimensions.get('window')
const MARGIN = 16;
const TAB_BAR_WIDTH = width - 2 * MARGIN;
const TAB_WIDTH = TAB_BAR_WIDTH / 3;

const TabBar = ({ state, descriptors, navigation, hide }) => {

    const [translateX] = useState(new Animated.Value(0))

    const translateTab = (index) => {
        Animated.spring(translateX, {
            toValue: index * TAB_WIDTH,
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        translateTab(state.index)
    }, [state.index])



    return (
        <View style={[styles.tabBarContainer, { display: hide ? 'none' : 'flex' }]}>
            <View style={styles.slidingTabContainer}>
                <Animated.View style={[styles.slidingTab, { transform: [{ translateX }] }]} />
            </View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <TabIcon label={label} isFocused={isFocused} index={state.index} />
                        <TextBold style={styles.tabText}>{label}</TextBold>
                    </TouchableOpacity>
                );
            })}
        </View >
    );
}

const TabIcon = ({ label, isFocused, index }) => {
    const [translateY] = useState(new Animated.Value(0))

    const translateIcon = (val) => {
        Animated.spring(translateY, {
            toValue: val,
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        if (isFocused) {
            translateIcon(heightPercentageToDP(-2.7))
        } else {
            translateIcon(0)
        }
    }, [index])


    if (label === 'Generate') {
        return (
            <Animated.View style={{ transform: [{ translateY }] }}>
                <GenerateIcon isFocused={isFocused} />
            </Animated.View>
        )
    }
    if (label === 'Scan') {
        return (
            <Animated.View style={{ transform: [{ translateY }] }}>
                <ScanIcon isFocused={isFocused} />
            </Animated.View>
        )
    }
    if (label === 'Settings') {
        return (
            <Animated.View style={{ transform: [{ translateY }] }}>
                <SettingsIcon isFocused={isFocused} />
            </Animated.View>
        )
    }

}


export default TabBar;

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        height: heightPercentageToDP(8),
        width: TAB_BAR_WIDTH,
        position: 'absolute',
        alignSelf: 'center',
        bottom: MARGIN,
        borderRadius: 15,
        backgroundColor: '#4F709C',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tabText: {
        color: '#FFF',
        fontSize: RFValue(10),
        lineHeight: heightPercentageToDP(2.5)
    },
    TabBarIcon: {
        borderRadius: RFValue(70),
        height: RFValue(70),
        width: RFValue(70),
        borderWidth: 6,
        borderColor: '#fff',
    },
    slidingTabContainer: {
        width: TAB_WIDTH,
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: '#4F709C',
        borderRadius: 15,
        alignItems: 'center'
    },
    slidingTab: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#4F709C',
        bottom: 35,
        borderWidth: 4,
        borderColor: '#fff'
    },
})
