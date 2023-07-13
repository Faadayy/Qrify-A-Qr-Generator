
import { View } from 'react-native'
import React from 'react'
import QRCodeStyled from 'react-native-qrcode-styled'

const QRStyles1 = ({ value }) => {

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
          pieceBorderRadius={3}
          outerEyesOptions={{
            topLeft: {
              borderRadius: getLevel().size === 4 ? 12 : 17
            },
            topRight: {
              borderRadius: getLevel().size === 4 ? 12 : 17
            },
            bottomLeft: {
              borderRadius: getLevel().size === 4 ? 12 : 17
            },
          }}
          innerEyesOptions={{
            topLeft: {
              borderRadius: getLevel().size === 4 ? 5 : 7,
              scale: 1.2
            },
            topRight: {
              borderRadius: getLevel().size === 4 ? 5 : 7,
              scale: 1.2
            },
            bottomLeft: {
              borderRadius: getLevel().size === 4 ? 5 : 7,
              scale: 1.2
            },
          }}
        />
      </View>
    </View >
  )
}

export { QRStyles1 }
