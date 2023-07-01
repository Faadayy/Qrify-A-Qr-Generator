import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import QRCodeStyled from 'react-native-qrcode-styled';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { saveQrToDisk } from '@helpers';
import { RFValue } from 'react-native-responsive-fontsize';


interface Props {
    value: string
    qrStyles: any
    getRef?: any
}

const CustomDesignedQR = ({ value, qrStyles, getRef }: Props) => {
    const rgbaToHex = (rgba) => {
        let [r, g, b, a] = rgba.slice(5, -1).split(",").map((val) => parseInt(val.trim()));
        let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    }
    const getColor = (color) => {
        if (color?.includes('rgb')) return rgbaToHex(color)
        else return color
    }

    const getOuterRadius = (radius) => {
        if (radius <= 20) return radius + 3
        else return 15
    }

    const getInnerRadius = (radius) => {
        if (radius <= 10) return radius + 3
        else return 9
    }

    const getPieceValue =
        (qrStyles?.ecLevel === 'L' ? 10
            : qrStyles?.ecLevel === 'M' ? 9
                : qrStyles?.ecLevel === 'Q' ? 9
                    : qrStyles?.ecLevel === 'H' ? 7
                        : 8)

    return <View>
        <QRCodeStyled
            // ref={c => (valRef = c)}
            ref={getRef}
            data={value}
            style={{
                backgroundColor: qrStyles?.bgColor ? getColor(qrStyles?.bgColor) : '#FFFFFF',
                // overflow: 'hidden',
            }}
            padding={15}
            pieceSize={getPieceValue}
            errorCorrectionLevel={qrStyles?.ecLevel ? qrStyles.ecLevel : 'M'}
            pieceBorderRadius={qrStyles?.qrStyle === 'dots' ? 5 : 0}
            color={qrStyles?.fgColor ? getColor(qrStyles?.fgColor) : '#000000'}
            outerEyesOptions={{
                topLeft: {
                    borderRadius: qrStyles?.eyeRadius ? getOuterRadius(qrStyles.eyeRadius) : 0,
                },
                topRight: {
                    borderRadius: qrStyles?.eyeRadius ? getOuterRadius(qrStyles.eyeRadius) : 0,
                },
                bottomLeft: {
                    borderRadius: qrStyles?.eyeRadius ? getOuterRadius(qrStyles.eyeRadius) : 0,
                },
            }}

            innerEyesOptions={{
                borderRadius: qrStyles?.eyeRadius ? getInnerRadius(qrStyles.eyeRadius) : 0,
                scale: 1.05,
            }}
        />
    </View>


}

export { CustomDesignedQR }

