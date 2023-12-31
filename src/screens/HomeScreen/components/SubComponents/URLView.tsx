import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TextLight, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from 'helpers/Colors'

const URLView = ({ handleLink, setloading }) => {
    const [url, setUrl] = useState('')
    const [error, seterror] = useState(false)
    const [height, setHeight] = useState(0);

    function validateURL(url) {
        if (/^(?:(?:https?:\/\/)|(?:www\.)?)([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})(?:\/.*)?$/i.test(url)) {
            return true;
        } else {
            return false;
        }
    }

    const handlePress = () => {
        setloading(true)
        seterror(false)
        if (url && validateURL(url)) {
            setTimeout(() => {
                setloading(false)
            }, 3000);
            handleLink(url)
        } else {
            setloading(false)
            seterror(true)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter URL'
                style={{
                    fontFamily: 'Nexa-Regular',
                    height: Math.max(50, height) <= heightPercentageToDP(20) ? Math.max(50, height) : heightPercentageToDP(20),
                }}
                value={url}
                onChangeText={setUrl}
                multiline={true}
                numberOfLines={4}
                maxLength={180}
                error='Please enter a valid url first'
                touched={error}
                onContentSizeChange={event => {
                    setHeight(event.nativeEvent.contentSize.height);
                }}
            />
            <View style={{ flexDirection: 'row', marginBottom: heightPercentageToDP(2) }}>
                <Touchable style={styles.buttonurl} onPress={() => { setUrl(url + 'https://') }}>
                    <TextRegular style={{ color: '#000' }}>https://</TextRegular>
                </Touchable>
                <Touchable style={styles.buttonurl} onPress={() => { setUrl(url + 'www.') }}>
                    <TextRegular style={{ color: '#000' }}>www.</TextRegular>
                </Touchable>
                <Touchable style={styles.buttonurl} onPress={() => { setUrl(url + '.com') }}>
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

export { URLView }

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