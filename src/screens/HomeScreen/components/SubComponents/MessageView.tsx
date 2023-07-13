import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { PhoneInput, TextInput, TextLight, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from 'helpers/Colors'
import RNPhoneInput from 'react-native-phone-number-input'

const MessageView = ({ item, handleLink, setloading }) => {
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    const [field, setFieldValue] = useState('')
    const [error, seterror] = useState(false)
    const [numberError, setnumberError] = useState(false)
    const [countryCode, setCountryCode] = useState(1)
    const [height, setHeight] = useState(0);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneInput = useRef<RNPhoneInput>(null)

    const handlePress = () => {
        setloading(true)
        seterror(false)
        setnumberError(false)
        if (number && !(/^ *$/.test(number)) && (number.length > 8 && number.length < 14)) {
            if (message && !(/^ *$/.test(message))) {
                let MessageV = '';
                if (item === 'whatsapp') {
                    MessageV = `whatsappNumber:${number}|message:${message}`
                } else {
                    MessageV = `number:${number}|message:${message}`
                }
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
            setnumberError(true)
        }
    }

    return (
        <View style={styles.container}>
            <PhoneInput
                phoneRef={phoneInput}
                onChangeText={setNumber}
                value={number}
                placeholder="Mobile No"
                error='Enter a valid number'
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
            <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                <Touchable rippleEffect='white' style={styles.textButton} onPress={handlePress}>
                    <TextRegular style={styles.generateButton}>Generate</TextRegular>
                </Touchable>
            </View>
        </View>
    )
}

export { MessageView }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#213555',
        borderRadius: 10,
        paddingVertical: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(5),

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
        // marginRight: widthPercentageToDP(4),
        borderRadius: 5,
    }
})