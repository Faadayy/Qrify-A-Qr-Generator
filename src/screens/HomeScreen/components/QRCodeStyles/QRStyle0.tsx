
import { StyleSheet, View } from 'react-native'
import React from 'react'
import QRCodeStyled from 'react-native-qrcode-styled'

const QRStyles0 = ({ value }) => {


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
        // pieceBorderRadius={qrStyles?.qrStyle === 'dots' ? 5 : 0}
        />
      </View>
    </View >
  )
}

export { QRStyles0 }

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