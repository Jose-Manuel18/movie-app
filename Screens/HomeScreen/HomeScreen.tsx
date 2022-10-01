import { StyleSheet, View, ScrollView, Text } from 'react-native'
import React from 'react'
import MoviesAPI from '../../API/PopularMoviesAPI'
import ReusableText from '../../Components/ReusableText'
import SeeAllButton from '../../Components/Buttons/SeeAllButton'
import TopRatedMoviesAPI from '../../API/TrendingMoviesAPI'
import SeriesAPI from '../../API/SeriesAPI'
import SearchButton from '../../Components/SearchBarButton/SearchButton'
import { useNavigation } from '@react-navigation/native'
import UpComingAPI from '../../API/UpComingAPI'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Colors } from '../../Components/Utils/Colors'

function HomeScreen() {
  const { top } = useSafeAreaInsets()
  const { navigate }: { navigate: any } = useNavigation()
  const StyledView = styled.View`
    padding-top: ${top};
    background-color: ${Colors.DarkPurple};
  `

  const StyledHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `

  return (
    <StyledView>
      <SearchButton />
      <MoviesAPI />
      <StyledHeader>
        <ReusableText modo='bigText'>Trending</ReusableText>
        <SeeAllButton onPress={() => navigate('SeeAllTrendingScreen')} />
      </StyledHeader>
      <TopRatedMoviesAPI />
      <StyledHeader>
        <ReusableText modo='bigText'>Series</ReusableText>
        <SeeAllButton onPress={() => navigate('SeeAllSeriesScreen')} />
      </StyledHeader>
      <SeriesAPI />
      <StyledHeader>
        <ReusableText modo='bigText'>Up Coming</ReusableText>
        <SeeAllButton onPress={() => navigate('SeeAllUpComing')} />
      </StyledHeader>
      <UpComingAPI />
    </StyledView>
  )
}

export default HomeScreen
