import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

const EmailView = ({ handleLink, setloading }) => {
    const [email, setEmail] = useState('')
    const [error, seterror] = useState(false)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handlePress = () => {
        setloading(true)
        seterror(false)
        if (email && !(/^ *$/.test(email)) && emailPattern.test(email)) {
            setTimeout(() => {
                setloading(false)
            }, 3000);
            handleLink(email)
        } else {
            setloading(false)
            seterror(true)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter email'
                style={{
                    fontFamily: 'Nexa-Regular',
                    height: Math.max(50),
                }}
                value={email}
                onChangeText={setEmail}
                maxLength={30}
                error='Please enter a valid email'
                touched={error}
            />
            <View style={{ flexDirection: 'row', marginBottom: heightPercentageToDP(2) }}>
                <Touchable style={styles.buttonurl} onPress={() => { setEmail(email + '@yahoo.com') }}>
                    <TextRegular style={{ color: '#000' }}>@yahoo.com</TextRegular>
                </Touchable>
                <Touchable style={styles.buttonurl} onPress={() => { setEmail(email + '@gmail.com') }}>
                    <TextRegular style={{ color: '#000' }}>@gmail.com</TextRegular>
                </Touchable>
                <Touchable style={styles.buttonurl} onPress={() => { setEmail(email + '.com') }}>
                    <TextRegular style={{ color: '#000' }}>.com</TextRegular>
                </Touchable>
            </View>
            <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                <Touchable rippleEffect='white' style={styles.textButton} onPress={handlePress}>
                    <TextRegular style={styles.generateButton}>Generate</TextRegular>
                </Touchable>
            </View>
        </View>
    )
}

export { EmailView }

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