import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { FullScreenView, TextBold, Touchable, } from 'components'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import LineIcon from 'assets/svgs/LineIcon'
import TextView from './components/SubComponents/TextView'
import EmailView from './components/SubComponents/EmailView'
import MessageView from './components/SubComponents/MessageView'
import WifiView from './components/SubComponents/WifiView'
import BackIcon from 'assets/svgs/BackIcon'
import SocialView from './components/SubComponents/SocialView'
import URLView from './components/SubComponents/URLView'

const GenerationScreen = ({ navigation, route }) => {
    const item = route.params.icon
    const [link, setLink] = useState('')

    const handleLink = (val) => {
        console.log({ item, val })
    }

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
                {item === 'text' && <TextView handleLink={handleLink} />}
                {item === 'url' && <URLView handleLink={handleLink} />}
                {item === 'email' && <EmailView handleLink={handleLink} />}
                {item === 'message' && <MessageView item={item} handleLink={handleLink} />}
                {item === 'whatsapp' && <MessageView item={item} handleLink={handleLink} />}
                {item === 'wifi' && <WifiView handleLink={handleLink} />}
                {['youtube', 'linkedin', 'facebook', 'twitter', 'instagram'].includes(item) && <SocialView item={item} handleLink={handleLink} />}
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