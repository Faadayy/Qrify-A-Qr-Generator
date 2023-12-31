import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

const TextView = ({ handleLink, setloading }) => {
    const [text, setText] = useState('')
    const [error, seterror] = useState(false)
    const [height, setHeight] = useState(0);

    const handlePress = () => {
        setloading(true)
        seterror(false)
        if (text) {
            setTimeout(() => {
                setloading(false)
            }, 3000);
            handleLink(text)
        } else {
            setloading(false)
            seterror(true)
        }
    }


    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter Text'
                style={{
                    fontFamily: 'Nexa-Regular',
                    height: Math.max(50, height) <= heightPercentageToDP(40) ? Math.max(50, height) : heightPercentageToDP(40),
                }}
                value={text}
                onChangeText={setText}
                multiline={true}
                numberOfLines={4}
                maxLength={180}
                error='Please enter some text'
                touched={error}
                onContentSizeChange={event => {
                    setHeight(event.nativeEvent.contentSize.height);
                }}
            />
            <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                <Touchable rippleEffect='white' style={styles.textButton} onPress={handlePress}>
                    <TextRegular style={styles.generateButton}>Generate</TextRegular>
                </Touchable>
            </View>
        </View>
    )
}

export { TextView }

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
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    generateButton: {
        color: '#fff',
        fontSize: RFValue(15),
        textAlign: 'center',
    },
})