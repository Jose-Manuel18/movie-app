import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useRef, useMemo } from 'react'
import DetailsCard from './DetailsCard'
import { Colors } from '../../Components/Utils/Colors'
import BottomSheet, { useBottomSheetTimingConfigs } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import { Easing } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { opacity } from 'react-native-redash'

const DetailScreen = ({ route }) => {
  const navigation = useNavigation()
  const movieDetails = route.params.movieDetails
  const sheetRef = useRef(null)
  const snapPoints = useMemo(() => ['30%', '50%'], [])
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const timingConfig = useBottomSheetTimingConfigs({
    duration: 200,
    easing: Easing.linear,
  })
  console.log(movieDetails)
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        sheetRef.current?.close()
      }}
      style={styles.container}
    >
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        style={{ backgroundColor: Colors.DarkPurple }}
        onChange={handleSnapPress}
        animateOnMount={true}
        index={0}
        backdropComponent={() => {
          return (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => navigation.goBack()}
            />
          )
        }}
        backgroundComponent={() => (
          <View style={{ flex: 1, backgroundColor: Colors.DarkPurple }} />
        )}
        enablePanDownToClose={true}
        animationConfigs={timingConfig}
        enableOverDrag={true}
        onClose={() => navigation.goBack()}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
      >
        <View style={styles.contentContainer}>
          <DetailsCard movie={movieDetails} />
        </View>
      </BottomSheet>
    </TouchableWithoutFeedback>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
  },
  handleStyle: {
    backgroundColor: Colors.LightPurple,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  handleIndicatorStyle: {
    backgroundColor: 'white',
  },
})
