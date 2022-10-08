import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import SearchBar from '../Components/SearchBar'
import SearchCard from '../Components/Card/SearchCard'
import { useNavigation } from '@react-navigation/native'
const SearchAPI = () => {
  const { navigate } = useNavigation()
  const [search, setSearch] = useState('')
  const [newData, setNewData] = useState([])
  const [filteredDataSource, setFilteredDataSource] = useState([])
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

  const searchFilterFunction = (text) => {
    if (text) {
      setSearch(text)
    } else {
      setFilteredDataSource(newData)
      setSearch(text)
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={(text) => searchFilterFunction(text)}
        deleteText={() => setSearch('')}
        inputRef={inputRef}
      />
      <FlatList
        data={filteredDataSource.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (filteredDataSource.results) {
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
          } else {
          }
        }}
      />
    </View>
  )
}

export default SearchAPI

const styles = StyleSheet.create({})
