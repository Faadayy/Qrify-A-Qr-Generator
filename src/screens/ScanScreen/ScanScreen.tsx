import { Dimensions, Linking, PermissionsAndroid, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { FullScreenView, TextBold, Touchable } from 'components'
import { heightPercentageToDP, widthPercentageToDP, } from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { LineIcon, TorchOffIcon, TorchOnIcon } from 'assets'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import { useIsFocused } from '@react-navigation/native'
import { BarcodeFormat, useScanBarcodes } from 'vision-camera-code-scanner'
import { ERNHoleViewTimingFunction, IRNHoleViewAnimation, RNHole, RNHoleView } from 'react-native-hole-view'

const firstHole: RNHole = { x: 150, y: 390, width: 120, height: 120, borderRadius: 60 };
const secondHole: RNHole = { x: 150, y: 40, width: 120, height: 120, borderRadius: 60 };

const animationSettings: IRNHoleViewAnimation = { timingFunction: ERNHoleViewTimingFunction.EASE_IN_OUT, duration: 200 };

const ScanScreen = () => {

    const devices = useCameraDevices()
    const device = devices.back
    const isFocued = useIsFocused()
    const [torchOn, setTorchOn] = useState(false)
    const [frameProcessor, barcodes] = useScanBarcodes(
        [BarcodeFormat.ALL_FORMATS],
        { checkInverted: true }
    );

    const [holes, setHoles] = useState<RNHole[]>([]);
    const [animated, setAnimated] = useState<boolean>(false);
    const [animation, setAnimation] = useState<IRNHoleViewAnimation | undefined>(undefined);


    useEffect(() => {
        async function getPermissions() {
            const permission = await Camera.requestCameraPermission();
            if (permission === 'denied') await Linking.openSettings()
        }
        getPermissions()

    }, [])

    useEffect(() => {
        console.log(barcodes);
    }, [barcodes]);

    const onPress = useCallback(() => {
        if (animated) {
            setHoles([firstHole]);
        } else {
            setHoles([secondHole])
        }

        setAnimation({ ...animationSettings });
        setAnimated(!animated);
    }, [animated, animation])




    if (device == null && isFocued) return
    else
        return (
            <FullScreenView>
                <View style={styles.headerView}>
                    <LineIcon />
                    <TextBold style={styles.header}>
                        Scan QR Code
                    </TextBold>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Camera
                        style={styles.cameraStyles}
                        device={device}
                        isActive={isFocued}
                        photo={true}
                        enableZoomGesture={true}
                        torch={torchOn ? 'on' : 'off'}
                        frameProcessor={frameProcessor}
                        frameProcessorFps={5}
                    />
                    <RNHoleView
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '70%',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(34,146,231,0.4)'
                        }}
                        animation={animation}
                        holes={holes}
                        onAnimationFinished={() => {
                            setAnimation(undefined);
                        }}
                    >
                        <View style={{
                            width: '60%',
                            height: '60%',
                            position: 'absolute',
                            alignSelf: 'center',
                            marginTop: heightPercentageToDP(15),
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <View style={{ justifyContent: 'space-between' }}>
                                <View style={[styles.childContainers, { borderTopWidth: 7, borderLeftWidth: 7, }]} />
                                <View style={[styles.childContainers, { borderBottomWidth: 7, borderLeftWidth: 7, }]} />
                            </View>
                            <View style={{ justifyContent: 'space-between' }}>
                                <View style={[styles.childContainers, { borderTopWidth: 7, borderRightWidth: 7, }]} />
                                <View style={[styles.childContainers, { borderBottomWidth: 7, borderRightWidth: 7, }]} />
                            </View>
                        </View>

                        <View style={styles.torchView}>
                            <Touchable
                                style={styles.torchButton}
                                onPress={() => setTorchOn(!torchOn)}>
                                {torchOn ? <TorchOnIcon /> : <TorchOffIcon />}
                            </Touchable>
                        </View>

                    </RNHoleView>

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
    },
    cameraStyles: {
        width: widthPercentageToDP('100%'),
        height: '70%',
    },
    torchView: {
        // padding: 25,
        width: widthPercentageToDP(10),
        height: widthPercentageToDP(10),
        borderRadius: widthPercentageToDP(15),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: heightPercentageToDP(3),
        marginRight: widthPercentageToDP(3),
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0

    },
    torchButton: {
        width: widthPercentageToDP(10),
        height: widthPercentageToDP(10),
        borderRadius: widthPercentageToDP(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(256,256,256,0.5)',
    },
    childContainers: {
        minWidth: '43%',
        minHeight: '43%',
        borderRadius: 5
    },
})


