import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FullScreenView, SuccessToast, TextBold, Touchable, } from 'components'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import LineIcon from 'assets/svgs/LineIcon'
import { Toast, ToastType } from '@iqorlobanov/react-native-toast'
import GeneralCards from './components/GeneralCards'
import SocialCard from './components/SocialCard'

const HomeScreen = () => {

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

    const HandlePress = (item) => {
        console.log({ item })
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

export default HomeScreen

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