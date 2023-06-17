import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TextBold, TextLight, TextRegular, Touchable } from 'components';
import { RFValue } from 'react-native-responsive-fontsize';
import URLIcon from 'assets/svgs/URLIcon';
import TextIcon from 'assets/svgs/TextIcon';
import EmailIcon from 'assets/svgs/EmailIcon';
import WhatsAppIcon from 'assets/svgs/WhatsappIcon';
import VCardIcon from 'assets/svgs/VCardIcon';
import WifiIcon from 'assets/svgs/WifiIcon';
import MessageIcon from 'assets/svgs/MessageIcon';


type Icon = {
    icon: string
}
const GeneralCards = ({ data, handlePress }) => {

    const renderIcon = (icon: Icon) => {
        switch (icon.icon) {
            case 'text':
                return <TextIcon />
            case 'url':
                return <URLIcon />
            case 'email':
                return <EmailIcon />
            case 'message':
                return <MessageIcon />
            case 'wifi':
                return <WifiIcon />
            case 'vcard':
                return <VCardIcon />
            default:
                return null
        }
    }



    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { handlePress(item) }}>
            <View style={styles.iconContainer}>
                {renderIcon(item)}
                <TextLight style={{ marginTop: 8, color: '#fff', lineHeight: RFValue(15), fontSize: RFValue(12) }}>{item.name}</TextLight>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.cardContainer}>
            <TextRegular style={styles.headerText}>General</TextRegular>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default GeneralCards

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: widthPercentageToDP(2),
        paddingVertical: heightPercentageToDP(1),
        borderRadius: 10,
    },
    headerText: {
        fontSize: RFValue(15),
        color: '#213555',
        marginLeft: RFValue(5)
    },
    flatListContainer: {
        backgroundColor: '#4F709C',
        paddingHorizontal: widthPercentageToDP(2),
        paddingVertical: heightPercentageToDP(1),
        borderRadius: 10,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        backgroundColor: '#213555',
        marginHorizontal: 16,
        height: RFValue(70),
        width: RFValue(70),

        // padding: RFValue(8),
        borderRadius: 10
    },
});