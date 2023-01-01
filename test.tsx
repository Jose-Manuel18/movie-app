import { Button, StyleSheet, View } from 'react-native'
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  FadeInDown,
  FadeInUp,
} from 'react-native-reanimated'

export function Box() {
  const offset = useSharedValue(0)

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(offset.value * 200, { damping: 20 }),
        },
      ],
      //   transform: [{ translateX: withSpring(offset.value * 255) }],
    }
  })

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 10, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, defaultSpringStyles]} />
      <Animated.View
        style={[styles.box, customSpringStyles]}
        entering={FadeInUp}
        exiting={FadeInDown}
      />
      <Button
        onPress={() =>
          offset.value === 1 ? (offset.value = 0) : (offset.value = 1)
        }
        title="Move"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  box: { width: 80, height: 80, backgroundColor: '#dad' },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

