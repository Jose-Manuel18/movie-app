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
    const View = styled.View`
        padding-top: ${top};
        background-color: ${Colors.DarkPurple};
    `
    const Title = styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `
    return (
        <View>
            <ScrollView>
                <SearchButton />
                <MoviesAPI />
                <Title>
                    <ReusableText modo="bigText">Trending</ReusableText>
                    <SeeAllButton
                        onPress={() => navigate('SeeAllTrendingScreen')}
                    />
                </Title>
                <TopRatedMoviesAPI />
                <Title>
                    <ReusableText modo="bigText">Series</ReusableText>
                    <SeeAllButton
                        onPress={() => navigate('SeeAllSeriesScreen')}
                    />
                </Title>
                <SeriesAPI />
                <Title>
                    <ReusableText modo="bigText">Up Coming</ReusableText>
                    <SeeAllButton onPress={() => navigate('SeeAllUpComing')} />
                </Title>
                <UpComingAPI />
            </ScrollView>
        </View>
    )
}

