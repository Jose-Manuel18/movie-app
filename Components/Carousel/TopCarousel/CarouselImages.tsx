import { Dimensions, View } from 'react-native'
import React, { LegacyRef, useRef, useState } from 'react'
import CardImage from '../Cards/CardImage'
import { useNavigation } from '@react-navigation/native'
import { take } from 'lodash'
import { Colors } from '../../Utils/Colors'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import {
  CarouselParamList,
  CarouselPropertiesList,
  movieTypes,
} from '../Types/types'
const CarouselImages = ({ info }: { info: CarouselParamList }) => {
  const { navigate } = useNavigation()
  const [index, setIndex] = useState(0)
  const { width: viewportWidth } = Dimensions.get('window')
  const SLIDE_WIDTH = Math.round(viewportWidth / 2.8)
  const ITEM_HORIZONTAL_MARGIN = 5
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 0.9
  const SLIDER_WIDTH = viewportWidth
  let RandomNumber = Math.floor(Math.random() * 4) + 1
  const isCarousel = useRef(null)

  return (
    <View onTouchMove={(e) => e.stopPropagation()}>
      <Carousel
        layout='default'
        data={take(info, 5)}
        initialScrollIndex={RandomNumber}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        scroll
        contentContainerCustomStyle={{
          overflow: 'hidden',
          width: 60 * info.length,
        }}
        onSnapToItem={(index) => setIndex(index)}
        snapToStart={true}
        ref={isCarousel}
        // autoplayInterval={500}
        // autoplay={true}
        inactiveSlideScale={0.6}
        inactiveSlideOpacity={0.5}
        renderItem={({ item }) => {
          return (
            <CardImage
              movie={item}
              onPress={() => {
                navigate('DetailScreen', {
                  movieDetails: item,
                })
              }}
            />
          )
        }}
      />
      <Pagination
        dotsLength={5}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 4,
          height: 10,
          borderRadius: 16,
          paddingHorizontal: 10,
          backgroundColor: Colors.Rose,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: Colors.TextColor,
          // Define styles for inactive dots here
        }}
        // inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}

export default CarouselImages
