import { Keyboard, StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, TextLight, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from 'constants/Colors'
import DropDownPicker from 'react-native-dropdown-picker'
import LockIcon from 'assets/svgs/LockIcon'

const WifiView = ({ handleLink, setloading }) => {
    const [wifiName, setWifiName] = useState('')
    const [password, setPassword] = useState('')
    const [error, seterror] = useState(false)
    const [wifiError, setwifiError] = useState(false)
    const [height, setHeight] = useState(0);
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: 'WPA',
            value: 'wpa',
            icon: () => <LockIcon />
        },
        {
            label: 'WPA2',
            value: 'wpa2',
            icon: () => <LockIcon />
        },
        {
            label: 'WEP',
            value: 'wep',
            icon: () => <LockIcon />
        },
    ]);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setOpen(false)
            }
        );
        return () => {
            keyboardDidShowListener.remove();
        };
    }, []);

    const handlePress = () => {
        setloading(true)
        seterror(false)
        setwifiError(false)
        if (wifiName && !(/^ *$/.test(wifiName))) {
            if (password && !(/^ *$/.test(password))) {
                let MessageV = `WIFI:S:${wifiName};T:${value};P:${password};H:false;;`
                setTimeout(() => {
                    setloading(false)
                }, 3000);
                handleLink(MessageV)
            }
            else {
                setloading(false)
                seterror(true)
            }
        } else {
            setloading(false)
            setwifiError(true)
        }
    }

    return (
        <View style={styles.container}>
            <View >

                <TextInput
                    placeholder='Enter network name'
                    value={wifiName}
                    onChangeText={setWifiName}
                    maxLength={30}
                    error='Please enter network name'
                    touched={wifiError}
                />
                <TextInput
                    placeholder='Enter Password'
                    value={password}
                    onChangeText={setPassword}
                    maxLength={30}
                    error='Please enter a password'
                    touched={error}
                    style={{
                        fontFamily: 'Nexa-Regular',
                    }}
                />
                <View style={{ zIndex: 1000 }}>
                    <DropDownPicker
                        open={open}
                        placeholder='Select Network Protocol'
                        value={value}
                        placeholderStyle={{ fontFamily: 'Nexa-Regular', color: Colors.text.placeholderColor }}
                        items={items}
                        closeOnBackPressed={true}
                        setOpen={setOpen}
                        setValue={setValue}
                        textStyle={{
                            fontFamily: 'Nexa-Regular',
                        }}
                        setItems={setItems}
                    />
                </View>
                <TouchableOpacity style={styles.textButton} onPress={handlePress}>
                    <TextRegular style={styles.generateButton}>Generate</TextRegular>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WifiView

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#213555',
        padding: 5,
        borderRadius: 10,
        paddingVertical: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(3),

    },
    textButton: {
        backgroundColor: '#4F709C',
        paddingVertical: heightPercentageToDP(1.5),
        marginTop: heightPercentageToDP(2),
        borderRadius: 5
    },
    generateButton: {
        color: '#fff',
        fontSize: RFValue(15),
        textAlign: 'center',
    },
    buttonurl: {
        padding: 5,
        backgroundColor: '#fff',
        marginRight: widthPercentageToDP(4),
        borderRadius: 5,
    }
})