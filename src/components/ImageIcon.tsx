import React, { FC, Fragment } from 'react';
import {
    Image,
    ImageResizeMode,
    StyleProp,
    ImageStyle,
    TouchableOpacity,
    GestureResponderEvent,
} from 'react-native';
import { images } from '@assets'



interface Props {
    type: string;
    width?: number | string;
    size?: number | string;
    height?: number | string;
    style?: StyleProp<ImageStyle>;
    resizeMode?: ImageResizeMode;
    onPress?: (event: GestureResponderEvent) => void;
}

const ImageIcon: FC<Props> = props => {
    const {
        type,
        width,
        size,
        height,
        style,
        resizeMode = 'contain',
        onPress,
    } = props;

    return (
        <Fragment>
            {onPress ? (
                <TouchableOpacity
                    onPress={onPress}
                    style={{ padding: 5 }}>
                    <Image
                        source={images[type]}
                        style={[
                            {
                                width: width ? width : size || 25,
                                height: height ? height : size || 25,
                            },
                            style,
                        ]}
                        resizeMethod="resize"
                        resizeMode={resizeMode}
                    />
                </TouchableOpacity>
            ) : (
                <Image
                    source={images[type]}
                    style={[
                        {
                            width: width ? width : size || 25,
                            height: height ? height : size || 25,
                        },
                        style,
                    ]}
                    resizeMethod="resize"
                    resizeMode={resizeMode}
                />
            )}
        </Fragment>
    );
};

export default ImageIcon;
