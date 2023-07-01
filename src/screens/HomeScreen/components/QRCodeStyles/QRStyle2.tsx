
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import QRCodeStyled from 'react-native-qrcode-styled'
import { TextBold, Touchable } from 'components'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'

const QRStyles2 = ({ value }) => {

  const getLevel = () => {
    if (value.length <= 60) {
      return { level: 'H', size: 6 }
    }
    else if (value.length > 60 && value.length <= 100) {
      return { level: 'Q', size: 4 }
    }
    else if (value.length > 100 && value.length <= 150) {
      return { level: 'M', size: 4 }
    }
    else {
      return { level: 'L', size: 3 }

    }
  }
  return (
    <View style={{ padding: 5, }}>
      <View style={{ backgroundColor: '#2D4356', padding: 10, borderRadius: 10 }}>
        <QRCodeStyled
          data={value}
          style={{ backgroundColor: 'white', borderRadius: 5 }}
          padding={7}
          pieceScale={1.02}
          errorCorrectionLevel={getLevel().level}
          pieceSize={getLevel().size}
          pieceBorderRadius={RFValue(3)}
          isPiecesGlued
          color={'#1d5480'}
          preserveAspectRatio="none"
          outerEyesOptions={{
            topLeft: {
              borderRadius: [15, 15, 0, 15]
            },
            topRight: {
              borderRadius: [15, 15, 15, 0]
            },
            bottomLeft: {
              borderRadius: [15, 0, 15, 15]
            },
          }}
          innerEyesOptions={{
            topLeft: {
              borderRadius: [7, 7, 0, 7]
            },
            topRight: {
              borderRadius: [7, 7, 7, 0]
            },
            bottomLeft: {
              borderRadius: [7, 0, 7, 7]
            },
          }}

        />
      </View>
    </View >
  )
}

export { QRStyles2 }

const styles = StyleSheet.create({
  headerQR: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
    borderBottomLeftRadius: 15
  },
})