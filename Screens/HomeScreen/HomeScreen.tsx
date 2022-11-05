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
import { ScrollView } from 'react-native'
import { SeeAllButton } from '../../Components/Carousel/Index'
export function HomeScreen() {
    const { navigate } = useNavigation()
    const { top } = useSafeAreaInsets()
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
            <ScrollView nestedScrollEnabled={true}>
                <SearchButton />
                <MoviesAPI />
                <StyledHeader>
                    <ReusableText modo="bigText">Trending</ReusableText>
                    <SeeAllButton
                        onPress={() => navigate('SeeAllTrendingScreen')}
                    />
                </StyledHeader>
                <TopRatedMoviesAPI />
                <StyledHeader>
                    <ReusableText modo="bigText">Series</ReusableText>
                    <SeeAllButton
                        onPress={() => navigate('SeeAllSeriesScreen')}
                    />
                </StyledHeader>
                <SeriesAPI />
                <StyledHeader>
                    <ReusableText modo="bigText">Up Coming</ReusableText>
                    <SeeAllButton onPress={() => navigate('SeeAllUpComing')} />
                </StyledHeader>
                <UpComingAPI />
            </ScrollView>
        </StyledView>
    )
}

