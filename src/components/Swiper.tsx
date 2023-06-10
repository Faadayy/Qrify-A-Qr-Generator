import React, { memo, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  StyleProp,
  ViewStyle,
  FlatList,
} from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
interface Props {
  data: any[] | undefined
  renderItem: any
  style?: StyleProp<ViewStyle>

  contentContainerStyle?: StyleProp<ViewStyle>
}
const Swiper = memo(
  ({ data, renderItem, style, contentContainerStyle }: Props) => {
    const scrollX = useRef(new Animated.Value(0)).current
    const windowWidth = widthPercentageToDP(80)

    const handleOnScroll = (event: any) => {
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )(event)
    }
    return (
      <SafeAreaView style={[styles.container, style]}>
        <View style={[styles.scrollContainer, contentContainerStyle]}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            onScroll={handleOnScroll}
          />
          <View style={styles.indicatorContainer}>
            {data?.map((_: any, index: number) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (index - 1),
                  windowWidth * index,
                  windowWidth * (index + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              })
              return (
                <Animated.View
                  key={index}
                  style={[styles.normalDot, { width }]}
                />
              )
            })}
          </View>
        </View>
      </SafeAreaView>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},

  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { Swiper }
