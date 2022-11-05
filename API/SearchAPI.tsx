import { View, FlatList } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import SearchBar from '../Components/SearchBar'
import SearchCard from '../Components/Card/SearchCard'
import { useNavigation } from '@react-navigation/native'
import { searchProps } from '../Components/Carousel/Types/types'
const SearchAPI = () => {
    const { navigate } = useNavigation()
    const [search, setSearch] = useState('')
    const [newData, setNewData] = useState<searchProps>(
        [] as unknown as searchProps
    )
    const [filteredDataSource, setFilteredDataSource] = useState<searchProps>(
        [] as unknown as searchProps
    )
    const inputRef = useRef(null)

    useEffect(() => {
        const timeOut = setTimeout(
            () =>
                fetch(
                    `https://api.themoviedb.org/3/search/multi?&api_key=${process.env.MOVIE_DB_KEY}&query=${search}&languages=en-US`
                )
                    .then((response) => response.json())
                    .then((responseJson) => {
                        setFilteredDataSource(responseJson)
                        setNewData(responseJson)
                    })
                    .catch((error) => {
                        console.error(error)
                    }),
            500
        )
        return () => {
            clearTimeout(timeOut)
        }
    }, [search])

    const searchFilterFunction = (text: React.SetStateAction<string>) => {
        if (text) {
            setSearch(text)
        } else {
            setFilteredDataSource(newData)

            setSearch(text)
        }
    }

    return (
        <View>
            <SearchBar
                value={search}
                onChangeText={(text) => searchFilterFunction(text)}
                deleteText={() => {
                    return setSearch('')
                }}
                inputRef={inputRef}
            />
            <FlatList
                data={filteredDataSource.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <SearchCard
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
        </View>
    )
}

export default SearchAPI
