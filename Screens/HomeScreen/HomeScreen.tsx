import React from 'react'
import MoviesAPI from '../../API/PopularMoviesAPI'
import ReusableText from '../../Components/ReusableText'
import TopRatedMoviesAPI from '../../API/TrendingMoviesAPI'
import SeriesAPI from '../../API/SeriesAPI'
import SearchButton from '../../Components/SearchBarButton/SearchButton'
import UpComingAPI from '../../API/UpComingAPI'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '../../Components/Utils/Colors'
import { SeeAllButton } from '../../Components/Carousel/Index'
import { Block } from '../../Components/Block'
export function HomeScreen() {
  const { navigate } = useNavigation()
  const { top } = useSafeAreaInsets()
  const View = styled.View`
    flex: 1;
    background-color: ${Colors.DarkPurple};
    padding-top: ${top};
  `
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchButton />
        <Block size={32} />
        <MoviesAPI />
        <TitleContainer>
          <ReusableText modo="bigText">Trending</ReusableText>
          <SeeAllButton onPress={() => navigate('SeeAllTrendingScreen')} />
        </TitleContainer>
        <Block size={32} />
        <TopRatedMoviesAPI />
        <Block size={32} />

        <TitleContainer>
          <ReusableText modo="bigText">Series</ReusableText>
          <SeeAllButton onPress={() => navigate('SeeAllSeriesScreen')} />
        </TitleContainer>
        <Block size={32} />
        <SeriesAPI />
        <Block size={32} />

        <TitleContainer>
          <ReusableText modo="bigText">Up Coming</ReusableText>
          <SeeAllButton onPress={() => navigate('SeeAllUpComing')} />
        </TitleContainer>
        <Block size={32} />
        <UpComingAPI />
        <Block size={32} />
      </ScrollView>
    </View>
  )
}

const ScrollView = styled.ScrollView``
const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`
// const Block = styled.View<{ gap: number }>`
//     padding: ${(props) => props.gap}px;
// `
// const Spacer = styled.View`
//     width: 100%;
// `

