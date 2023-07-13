import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FullScreenView, TextBold } from 'components'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { LineIcon } from 'assets'

const ScanScreen = () => {

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

export { ScanScreen }

const styles = StyleSheet.create({
    headerView: {
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


