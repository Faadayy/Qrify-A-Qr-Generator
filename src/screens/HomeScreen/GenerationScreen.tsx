import { ActivityIndicator, Keyboard, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import ViewShot from "react-native-view-shot";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FullScreenView, Modal, TextBold, Touchable, } from 'components'
import { QRStyles0, QRStyles1, QRStyles2, QRStyles3, QRStyles4, QRStyles5 } from './components/QRCodeStyles'
import { BackIcon, DownloadIcon, LineIcon, ShareIcon } from 'assets'
import { EmailView, MessageView, SocialView, TextView, WifiView } from './components/SubComponents'
import { URLView } from './components/SubComponents/URLView'
import { ShareQr, saveQrToDisk } from 'helpers'

const GenerationScreen = ({ navigation, route }) => {
    const item = route.params.icon
    const [activeIndex, setactiveIndex] = useState(0)
    const [link, setLink] = useState('jnk biwea ')
    const [keyboardOpened, setKeyboardOpened] = useState(false)
    const [showQR, setShowQR] = useState(false)
    const [loading, setloading] = useState(false)
    let ref = useRef()
    const viewShotRefs = useRef([]);


    const QRStyles = [
        { value: <QRStyles0 value={link} />, type: "Basic" },
        { value: <QRStyles1 value={link} />, type: "Rounded" },
        { value: <QRStyles2 value={link} />, type: "Eye" },
        { value: <QRStyles3 value={link} />, type: "Branded" },
        { value: <QRStyles4 value={link} />, type: "Premium " },
        { value: <QRStyles5 value={link} />, type: "Galaxy " },
    ]

    const handleLink = (val) => {
        setLink(val)
        setTimeout(() => {
            setShowQR(true)
            Keyboard.dismiss()
        }, 1000);
    }

    useEffect(() => {
        viewShotRefs.current = new Array(QRStyles.length).fill(0).map((_, index) => viewShotRefs.current[index] || createRef());
    }, [QRStyles]);


    useEffect(() => {
        setShowQR(false)
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow', () => {
                setShowQR(false)
                setKeyboardOpened(true)
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide', () => setKeyboardOpened(false)
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const renderItem = ({ item, index }) => {
        const viewShotRef = viewShotRefs.current[index];
        return (
            <View style={styles.itemsContainer}>
                <ViewShot ref={viewShotRef}>
                    <View style={{}}>
                        {item.value}
                    </View>
                </ViewShot>
                <View style={[styles.buttonsContainer]}>

                    <Touchable style={[styles.buttonsStyle]} rippleEffect='#213555' onPress={() => handleDownload(index)}>
                        <DownloadIcon />
                    </Touchable>
                    <Touchable style={[styles.buttonsStyle]} rippleEffect='#213555' onPress={() => handleShare(index)}>
                        <ShareIcon />
                    </Touchable>
                </View>
            </View>
        );
    };



    const handleDownload = async (val: number) => {
        await saveQrToDisk(viewShotRefs.current[val])
    }

    const handleShare = async (val: number) => {
        await ShareQr(viewShotRefs.current[val])
    }

    return (
        <FullScreenView>

            <View style={styles.headerView}>
                <Touchable rippleEffect='white' style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </Touchable>
                <LineIcon />
                <TextBold style={styles.header}>
                    {route.params.name}
                </TextBold>
            </View>
            <ScrollView>
                <View style={{}}>
                    <View style={styles.subContainer}>
                        {item === 'text' && <TextView handleLink={handleLink} setloading={setloading} />}
                        {item === 'url' && <URLView handleLink={handleLink} setloading={setloading} />}
                        {item === 'email' && <EmailView handleLink={handleLink} setloading={setloading} />}
                        {item === 'message' && <MessageView item={item} handleLink={handleLink} setloading={setloading} />}
                        {item === 'whatsapp' && <MessageView item={item} handleLink={handleLink} setloading={setloading} />}
                        {item === 'wifi' && <WifiView handleLink={handleLink} setloading={setloading} />}
                        {['youtube', 'linkedin', 'facebook', 'twitter', 'instagram'].includes(item) && <SocialView item={item} handleLink={handleLink} setloading={setloading} />}
                    </View>

                </View>
                {!keyboardOpened && showQR &&
                    <View style={styles.lowerSubContainer}>
                        <View>
                            <TextBold style={[styles.header, {
                                textAlign: 'center', marginBottom: heightPercentageToDP(2), color: '#fff'
                            }]}>QR Codes</TextBold>
                        </View>
                        <Carousel
                            layout={"default"}
                            ref={ref}
                            data={QRStyles}
                            sliderWidth={300}
                            itemWidth={widthPercentageToDP(70)}
                            renderItem={renderItem}
                            layoutCardOffset={9}
                            onSnapToItem={(index: number) => setactiveIndex(index)}
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
                                backgroundColor: 'rgba(255, 255, 255, 0.92)'
                            }}
                            inactiveDotStyle={{
                                // Define styles for inactive dots here
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                        />
                    </View>}
                <Modal
                    visible={loading}
                    subContainerStyle={{ width: '50%', paddingVertical: heightPercentageToDP(2), justifyContent: 'center', alignItems: 'center' }}
                >
                    <View >
                        <ActivityIndicator size={'large'} color={'#000'} />
                        <TextBold style={{ fontSize: RFValue(13), marginTop: 13 }}>Generating QR </TextBold>

                    </View>
                </Modal>
            </ScrollView>
        </FullScreenView >
    )
}

export { GenerationScreen }

const styles = StyleSheet.create({
    headerView: {
        marginVertical: heightPercentageToDP(2),
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        color: '#213555',
        fontSize: RFValue(22),
        lineHeight: heightPercentageToDP(4),
    },
    cardsSection: {
        marginHorizontal: widthPercentageToDP(2),
    },
    subContainer: {
        marginVertical: heightPercentageToDP(3),
        marginHorizontal: widthPercentageToDP(5),
    },
    lowerSubContainer: {
        alignItems: 'center',
        backgroundColor: '#213555',
        padding: 5,
        borderRadius: 10,
        paddingVertical: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(3),
        marginHorizontal: widthPercentageToDP(5),

    },
    itemsContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 8,
        elevation: 2,
        shadowColor: 'white',
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