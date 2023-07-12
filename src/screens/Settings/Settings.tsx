import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FullScreenView, TextBold } from 'components'
import LineIcon from 'assets/svgs/LineIcon'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'

const Settings = () => {

    return (
        <FullScreenView>
            <View style={styles.headerView}>
                <LineIcon />
                <TextBold style={styles.header}>
                    Scan QR Code
                </TextBold>
            </View>

            <View style={styles.cardsSection}>
                <TextBold>Bodyyyyy</TextBold>
            </View>
        </FullScreenView >
    )
}

export { Settings }

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





