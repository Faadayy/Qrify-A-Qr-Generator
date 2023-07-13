import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FullScreenView, TextBold, } from 'components'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import GeneralCards from './components/GeneralCards'
import SocialCard from './components/SocialCard'
import { LineIcon } from 'assets'

type Item = {
    id: number
    name: string
    icon: string
}

const HomeScreen = ({ navigation }) => {

    const generalData = [
        { id: 1, name: 'Text', icon: 'text' },
        { id: 2, name: 'URL', icon: 'url' },
        { id: 3, name: 'Email', icon: 'email' },
        { id: 4, name: 'Message', icon: 'message' },
        { id: 5, name: 'Wi-Fi', icon: 'wifi' },
        { id: 6, name: 'VCard', icon: 'vcard' },
    ]

    const socialData = [
        { id: 1, name: 'Youtube', icon: 'youtube' },
        { id: 2, name: 'Whatsapp', icon: 'whatsapp' },
        { id: 3, name: 'Facebook', icon: 'facebook' },
        { id: 4, name: 'LinkedIn', icon: 'linkedin' },
        { id: 5, name: 'Instagram', icon: 'instagram' },
        { id: 6, name: 'Twitter', icon: 'twitter' },
    ]

    const HandlePress = (item: Item) => {
        navigation.navigate('GenerationScreen', item)
    }


    return (
        <FullScreenView>
            <View style={styles.headerView}>
                <LineIcon />
                <TextBold style={styles.header}>
                    Generate QR Code
                </TextBold>
            </View>

            <View style={styles.cardsSection}>
                <GeneralCards data={generalData} handlePress={HandlePress} />
                <View style={{ marginVertical: heightPercentageToDP(1) }} />
                <SocialCard data={socialData} handlePress={HandlePress} />
            </View>
        </FullScreenView >
    )
}

export { HomeScreen }

const styles = StyleSheet.create({
    headerView: {
        // alignSelf: 'center',
        marginVertical: heightPercentageToDP(2),
        flexDirection: 'row',
    },
    header: {
        color: '#213555',
        fontSize: RFValue(22),
    },
    cardsSection: {
        marginHorizontal: widthPercentageToDP(2),
    }
})