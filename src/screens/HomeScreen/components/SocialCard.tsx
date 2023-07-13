import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TextBold, TextLight, Touchable } from 'components';
import { RFValue } from 'react-native-responsive-fontsize';
import { FacebookIcon, InstagramIcon, LineIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon, YoutubeIcon } from 'assets';



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
        <View style={{ overflow: 'hidden', borderRadius: 15, margin: 16, }}>
            <Touchable
                rippleEffect='white'
                onPress={() => { handlePress(item) }}
            >
                <View style={styles.iconContainer}>
                    {renderIcon(item)}
                    <TextLight style={{ marginTop: 8, color: '#fff', lineHeight: RFValue(15), fontSize: RFValue(12) }}>{item.name}</TextLight>
                </View>
            </Touchable >
        </View>
    );

    return (
        <View style={styles.cardContainer}>
            <View style={styles.flatListContainer}>
                <View style={styles.headerView}>
                    <LineIcon color={'#fff'} />
                    <TextBold style={styles.headerText}>Social</TextBold>
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
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#213555',
        height: RFValue(70),
        width: RFValue(70),
        borderRadius: 10
    },
});

