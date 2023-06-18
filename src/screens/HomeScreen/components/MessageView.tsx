import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TextLight, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from 'constants/Colors'

const MessageView = () => {
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    const [error, seterror] = useState(false)
    const [numberError, setnumberError] = useState(false)
    const [height, setHeight] = useState(0);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handlePress = () => {
        seterror(false)
        setnumberError(false)
        if (number && !(/^ *$/.test(number))) {
            if (message && !(/^ *$/.test(message))) {
                // QR Generate Hook

            }
            else {
                seterror(true)
            }
        } else {
            setnumberError(true)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter number'
                leftIcon={
                    <View>
                        <TextRegular style={{ fontFamily: 'Nexa-Bold', fontSize: RFValue(14) }}>+92</TextRegular>
                    </View>
                }
                value={number}
                onChangeText={setNumber}
                maxLength={12}
                keyboardType='phone-pad'
                error='Invalid Number'
                touched={numberError}
            />
            <TextInput
                placeholder='Enter message'
                value={message}
                onChangeText={setMessage}
                maxLength={180}
                error='Please enter a message'
                touched={error}
                onContentSizeChange={event => {
                    setHeight(event.nativeEvent.contentSize.height);
                }}
                style={{
                    fontFamily: 'Nexa-Regular',
                    height: Math.max(50, height) <= heightPercentageToDP(40) ? Math.max(50, height) : heightPercentageToDP(40),
                }}
                multiline={true}
                numberOfLines={4}
            />
            <TouchableOpacity style={styles.textButton} onPress={handlePress}>
                <TextRegular style={styles.generateButton}>Generate</TextRegular>
            </TouchableOpacity>
        </View>
    )
}

export default MessageView

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