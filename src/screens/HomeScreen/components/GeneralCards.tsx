import { StyleSheet, View, FlatList, } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TextBold, TextLight, Touchable } from 'components';
import { RFValue } from 'react-native-responsive-fontsize';
import { EmailIcon, LineIcon, MessageIcon, TextIcon, URLIcon, VCardIcon, WifiIcon } from 'assets';


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



    const renderItem = ({ item }) => {
        return (
            <View style={{ overflow: 'hidden', borderRadius: 15, margin: 16, }}>
                <Touchable
                    rippleEffect='white'
                    onPress={() => { handlePress(item) }}
                    disabled={item.name === 'VCard' ? true : false}
                >
                    <View style={styles.iconContainer}>
                        {renderIcon(item)}
                        <TextLight style={{ marginTop: 8, color: '#fff', lineHeight: RFValue(15), fontSize: RFValue(12) }}>{item.name}</TextLight>
                    </View>
                </Touchable >
            </View>

        )
    };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.flatListContainer}>
                <View style={styles.headerView}>
                    <LineIcon color={'#fff'} />
                    <TextBold style={styles.headerText}>General</TextBold>
                </View>
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
        fontSize: RFValue(18),
        color: '#fff',
        // marginLeft: RFValue(-5)
    },
    flatListContainer: {
        // alignItems: 'center',
        backgroundColor: '#4F709C',
        paddingHorizontal: widthPercentageToDP(2),
        paddingVertical: heightPercentageToDP(1),
        borderRadius: 10,
    },
    headerView: {
        paddingHorizontal: widthPercentageToDP(4),
        flexDirection: 'row',
        alignItems: 'center',
        // alignSelf: 'flex-start'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#213555',
        height: RFValue(70),
        width: RFValue(70),

        // padding: RFValue(8),
        borderRadius: 10
    },
});
