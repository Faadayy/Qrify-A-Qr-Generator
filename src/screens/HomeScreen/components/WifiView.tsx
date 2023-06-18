import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TextLight, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from 'constants/Colors'

const WifiView = () => {
    const [wifiName, setWifiName] = useState('')
    const [password, setPassword] = useState('')
    const [error, seterror] = useState(false)
    const [wifiError, setwifiError] = useState(false)
    const [height, setHeight] = useState(0);
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const handlePress = () => {
        seterror(false)
        setwifiError(false)
        if (wifiName && !(/^ *$/.test(wifiName))) {
            if (password && !(/^ *$/.test(password))) {
                // QR Generate Hook

            }
            else {
                seterror(true)
            }
        } else {
            setwifiError(true)
        }
    }

    return (
        <View style={styles.container}>
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
                setSecureTextEntry={setSecureTextEntry}
                secureTextEntry={secureTextEntry}
                error='Please enter a password'
                touched={error}
                optionalText='password'
                style={{
                    fontFamily: 'Nexa-Regular',
                    // height: Math.max(50, height),
                }}
            // multiline={true}
            // numberOfLines={4}
            />
            <TouchableOpacity style={styles.textButton} onPress={handlePress}>
                <TextRegular style={styles.generateButton}>Generate</TextRegular>
            </TouchableOpacity>
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