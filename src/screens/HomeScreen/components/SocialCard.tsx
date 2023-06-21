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
import YoutubeIcon from 'assets/svgs/YoutubeIcon';
import FacebookIcon from 'assets/svgs/FacebookIcon';
import LinkedInIcon from 'assets/svgs/LinkedInIcon';
import InstagramIcon from 'assets/svgs/InstagramIcon';
import TwitterIcon from 'assets/svgs/TwitterIcon';
import LineIcon from 'assets/svgs/LineIcon';


type Icon = {
    icon: string
}
const SocialCard = ({ data, handlePress }) => {

    const renderIcon = (icon: Icon) => {
        switch (icon.icon) {
            case 'youtube':
                return <YoutubeIcon />
            case 'whatsapp':
                return <WhatsAppIcon />
            case 'facebook':
                return <FacebookIcon />
            case 'linkedin':
                return <LinkedInIcon />
            case 'instagram':
                return <InstagramIcon />
            case 'twitter':
                return <TwitterIcon />
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
            {/* <TextRegular style={styles.headerText}>Social</TextRegular> */}
            <View style={styles.flatListContainer}>
                <View style={styles.headerView}>
                    <LineIcon color={'#fff'} />
                    <TextBold style={styles.headerText}>Social</TextBold>
                </View>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        alignItems: 'center',
                        // backgroundColor: 'red'
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default SocialCard


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
        marginVertical: 16,
        backgroundColor: '#213555',
        marginHorizontal: 16,
        height: RFValue(70),
        width: RFValue(70),

        // padding: RFValue(8),
        borderRadius: 10
    },
});

