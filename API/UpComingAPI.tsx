import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { UpComingState } from '../State/UpComingMovieState'
import { useRecoilValueLoadable } from 'recoil'
import { useNavigation } from '@react-navigation/native'
import { SmallCard } from '../Components/Carousel/Index'
import { take } from 'lodash'
const UpComingAPI = () => {
    const { navigate } = useNavigation()
    const { state, contents } = useRecoilValueLoadable(UpComingState)
    if (state === 'hasError' || state === 'loading') return null
    return (
        <View style={styles.container}>
            <FlatList
                data={take(contents.results, 10)}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                nestedScrollEnabled={true}
                renderItem={({ item }) => {
                    return (
                        <SmallCard
                            movie={item}
                            onPress={() => {
                                navigate('DetailScreen', { movieDetails: item })
                            }}
                        />
                    )
                }}
            />
        </View>
    )
}

export default UpComingAPI

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
})

