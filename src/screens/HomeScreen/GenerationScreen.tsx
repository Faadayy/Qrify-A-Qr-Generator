import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FullScreenView, SuccessToast, TextBold, Touchable, } from 'components'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import LineIcon from 'assets/svgs/LineIcon'
import { Toast, ToastType } from '@iqorlobanov/react-native-toast'
import GeneralCards from './components/GeneralCards'
import SocialCard from './components/SocialCard'
import TextView from './components/SubComponents/TextView'
import URLView from './components/SubComponents/SocialView'
import EmailView from './components/SubComponents/EmailView'
import MessageView from './components/SubComponents/MessageView'
import WifiView from './components/SubComponents/WifiView'
import BackIcon from 'assets/svgs/BackIcon'
import SocialView from './components/SubComponents/SocialView'


type Item = {
    id: number
    name: string
    icon: string
}

const GenerationScreen = ({ navigation, route }) => {
    const item = route.params.icon

    console.log({ a: route.params })

    return (
        <FullScreenView>

            <View style={styles.headerView}>
                <Touchable onPress={() => navigation.goBack()}>
                    <BackIcon />
                </Touchable>
                <LineIcon />
                <TextBold style={styles.header}>
                    {route.params.name}
                </TextBold>
            </View>
            <View style={styles.subContainer}>
                {item === 'text' && <TextView />}
                {item === 'url' && <URLView />}
                {item === 'email' && <EmailView />}
                {item === 'message' && <MessageView />}
                {item === 'wifi' && <WifiView />}
                {['youtube', 'whatsapp', 'linkedin', 'facebook', 'twitter', 'instagram'].includes(item) && <SocialView item={item} />}
            </View>

        </FullScreenView >
    )
}

export default GenerationScreen

const styles = StyleSheet.create({
    headerView: {
        // alignSelf: 'center',
        marginVertical: heightPercentageToDP(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    header: {
        color: '#213555',
        fontSize: RFValue(22),
        lineHeight: heightPercentageToDP(4)
    },
    cardsSection: {
        marginHorizontal: widthPercentageToDP(2),
    },
    subContainer: {
        marginVertical: heightPercentageToDP(3),
        marginHorizontal: widthPercentageToDP(5),
    }
})