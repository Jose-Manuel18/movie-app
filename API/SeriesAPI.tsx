import { View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { SeriesCarousel } from '../Components/Carousel/SeriesCarousel/SeriesCarousel'
const SeriesAPI = () => {
    const { isLoading, error, data } = useQuery(['popularTvShows'], () =>
        fetch(
            'https://api.themoviedb.org/3/tv/popular?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US'
        ).then((res) => res.json())
    )

    if (error || isLoading) return null
    return (
        <View>
            <SeriesCarousel info={data.results} />
        </View>
    )
}

export default SeriesAPI

