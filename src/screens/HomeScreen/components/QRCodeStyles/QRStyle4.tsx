
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import QRCodeStyled, {
  INNER_EYE_SIZE_IN_BITS,
  isCoordsOfInnerEyes,
  isCoordsOfOuterEyes,
  OUTER_EYE_SIZE_IN_BITS,
  RenderCustomPieceItem,
  SVGGradient,
  SVGQRCodeStyledProps,
} from 'react-native-qrcode-styled'; import { TextBold, Touchable } from 'components'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { Path, Svg, Defs, G, } from 'react-native-svg'

function circlePath(cx: number, cy: number, r: number): string {
  return `M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0`;
}
const QRStyles4 = ({ value }) => {

  const renderCustomPieceItem: RenderCustomPieceItem = ({ x, y, pieceSize, bitMatrix }) => {
    const c = Math.round(Math.random() * 100);
    if (
      bitMatrix[y]?.[x] === 1 &&
      !isCoordsOfOuterEyes(x, y, bitMatrix.length) &&
      !isCoordsOfInnerEyes(x, y, bitMatrix.length)
    ) {
      return (
        <Path
          fill={`rgb(${c},${c + 50},${c + 100})`}
          key={`piece_${x}_${y}`}
          d={`
            M${pieceSize * x} ${pieceSize * y} 
            L${pieceSize * (x + 1)} ${pieceSize * y} 
            L${pieceSize * (x + 1)} ${pieceSize * (y + 1)} 
            L${pieceSize * x} ${pieceSize * (y + 1)} z
          `}
        />
      );
    }

    return null;
  };

  const renderChildren: SVGQRCodeStyledProps['children'] = (pieceSize, bitMatrix) => {
    const qrSize = bitMatrix.length * pieceSize;
    const r = (OUTER_EYE_SIZE_IN_BITS * pieceSize) / 2;
    const rDot = (INNER_EYE_SIZE_IN_BITS * pieceSize) / 2;

    const topLeftPath = circlePath(r, r, r) + ' ' + circlePath(r, r, r - pieceSize);
    const topRightPath =
      circlePath(qrSize - r, r, r) + ' ' + circlePath(qrSize - r, r, r - pieceSize);
    const bottomLeftPath =
      circlePath(r, qrSize - r, r) + ' ' + circlePath(r, qrSize - r, r - pieceSize);

    const topLeftDotPath = circlePath(r, r, rDot);
    const topRightDotPath = circlePath(qrSize - r, r, rDot);
    const bottomLeftDotPath = circlePath(r, qrSize - r, rDot);

    return (
      <>
        <Defs>
          <SVGGradient
            id="gradient"
            origin={[0, 0]}
            size={qrSize}
            type={'linear'}
            options={{
              colors: ['#01fff2', '#b634e6'],
              end: [0.7, 0.7],
            }}
          />
        </Defs>

        <G fill={'url(#gradient)'}>
          <Path d={topLeftPath} fillRule={'evenodd'} />
          <Path d={topRightPath} fillRule={'evenodd'} />
          <Path d={bottomLeftPath} fillRule={'evenodd'} />

          <Path d={topLeftDotPath} />
          <Path d={topRightDotPath} />
          <Path d={bottomLeftDotPath} />
        </G>
      </>
    );
  };


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
          style={{
            backgroundColor: 'white',
            borderRadius: 16,
            overflow: 'hidden',
          }}
          padding={7}
          pieceScale={1.02}
          errorCorrectionLevel={getLevel().level}
          pieceSize={getLevel().size}
          renderCustomPieceItem={renderCustomPieceItem}
        >
          {renderChildren}
        </QRCodeStyled>
      </View>
    </View >
  )
}

export { QRStyles4 }

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