import { FlatList, Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FullScreenView, Swiper, TextBold, Touchable, } from 'components'
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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import DownloadIcon from 'assets/svgs/DownloadIcon'
import ShareIcon from 'assets/svgs/ShareIcon'
import { QRStyles0, QRStyles1, QRStyles2, QRStyles3, QRStyles4, QRStyles5 } from './components/QRCodeStyles'

const GenerationScreen = ({ navigation, route }) => {
    const item = route.params.icon
    const [activeIndex, setactiveIndex] = useState(0)
    const [link, setLink] = useState('jnk biwea ')
    const [keyboardOpened, setKeyboardOpened] = useState(false)
    let ref = useRef()
    const handleLink = (val) => {
        console.log({ item, val })
        setLink(val)
        Keyboard.dismiss()
    }

    const QRStyles = [
        { value: <QRStyles0 value={link} />, type: "Basic" },
        { value: <QRStyles1 value={link} />, type: "Rounded" },
        { value: <QRStyles2 value={link} />, type: "Eye" },
        { value: <QRStyles3 value={link} />, type: "Branded" },
        { value: <QRStyles4 value={link} />, type: "Premium " },
        { value: <QRStyles5 value={link} />, type: "Galaxy " },
    ]

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardOpened(true)
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardOpened(false)
            }
        );
        return () => {
            keyboardDidShowListener.remove();
        };
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemsContainer}>
                {/* <View style={styles.QRType}>
                    <TextBold style={{ fontSize: RFValue(17), textAlign: 'center' }}>{item.type}</TextBold>
                </View> */}
                <View style={{}}>
                    {item.value}
                </View>
                <View style={[styles.buttonsContainer]}>
                    <TouchableOpacity style={styles.buttonsStyle} onPress={() => handleDownload(item)}>
                        <DownloadIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsStyle} onPress={() => handleShare(item)}>
                        <ShareIcon />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };



    const handleDownload = (val) => {
        console.log("download", val)
    }

    const handleShare = (val) => {
        console.log("share", val)
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
            <View style={{ flex: 1 }}>
                <View style={styles.subContainer}>
                    {item === 'text' && <TextView handleLink={handleLink} />}
                    {item === 'url' && <URLView handleLink={handleLink} />}
                    {item === 'email' && <EmailView handleLink={handleLink} />}
                    {item === 'message' && <MessageView item={item} handleLink={handleLink} />}
                    {item === 'whatsapp' && <MessageView item={item} handleLink={handleLink} />}
                    {item === 'wifi' && <WifiView handleLink={handleLink} />}
                    {['youtube', 'linkedin', 'facebook', 'twitter', 'instagram'].includes(item) && <SocialView item={item} handleLink={handleLink} />}
                </View>
                {!keyboardOpened && <View style={styles.lowerSubContainer}>
                    <View>
                        <TextBold style={[styles.header, { textAlign: 'center' }]}>QR Codes</TextBold>
                    </View>
                    <Carousel
                        layout={"default"}
                        ref={ref}
                        data={QRStyles}
                        sliderWidth={300}
                        itemWidth={widthPercentageToDP(70)}
                        renderItem={renderItem}
                        layoutCardOffset={9}
                        onSnapToItem={index => setactiveIndex(index)}
                    />
                    <Pagination
                        dotsLength={QRStyles.length}
                        activeDotIndex={activeIndex}
                        carouselRef={ref}
                        tappableDots={true}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: 'rgba(0, 0, 0, 0.92)'
                        }}
                        inactiveDotStyle={{
                            // Define styles for inactive dots here
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>}
            </View>

        </FullScreenView >
    )
}

export default GenerationScreen

const styles = StyleSheet.create({
    headerView: {
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
        flex: 1,
        marginVertical: heightPercentageToDP(3),
        marginHorizontal: widthPercentageToDP(5),
    },
    lowerSubContainer: {
        flex: 3,
        alignSelf: 'center',
        // backgroundColor: 'red',
        // height: '60%'
    },
    itemsContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 8,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
        marginBottom: 3
    },
    buttonsStyle: {
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 20
    },
    QRType: {
        padding: 5,
        marginHorizontal: widthPercentageToDP(2),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000',
    }

})