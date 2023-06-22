import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TextLight, TextRegular, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from 'constants/Colors'

const URLView = ({ handleLink }) => {
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
        seterror(false)
        if (url && validateURL(url)) {
            handleLink(url)
        } else {
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
                <TouchableOpacity style={styles.buttonurl} onPress={() => { setUrl(url + 'https://') }}>
                    <TextRegular style={{ color: '#000' }}>https://</TextRegular>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonurl} onPress={() => { setUrl(url + 'www.') }}>
                    <TextRegular style={{ color: '#000' }}>www.</TextRegular>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonurl} onPress={() => { setUrl(url + '.com') }}>
                    <TextRegular style={{ color: '#000' }}>.com</TextRegular>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.textButton} onPress={handlePress}>
                <TextRegular style={styles.generateButton}>Generate</TextRegular>
            </TouchableOpacity>
        </View>
    )
}

export default URLView

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