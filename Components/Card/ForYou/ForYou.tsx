import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { GenreState } from '../../../State/GenreState'
import { TrendingState } from '../../../State/TrendingState'
import ForYouCard from './ForYouCard'
import { Colors } from '../../Utils/Colors'
import { take } from 'lodash'
import { useNavigation } from '@react-navigation/native'

const ForYou = () => {
    const { state: genreState, contents: genreContents } =
        useRecoilValueLoadable(GenreState)
    const { state, contents } = useRecoilValueLoadable(TrendingState)
    const { navigate } = useNavigation()
    if (genreState === 'hasError ' || genreState === 'loading') return null
    if (state === 'hasError ' || state === 'loading') return null
    return (
        <View style={styles.container}>
            <Text style={styles.text}>For You</Text>
            <FlatList
                scrollEnabled={false}
                data={take(contents.results, 10)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <ForYouCard
                            onPress={() => {
                                navigate('DetailScreen', { movieDetails: item })
                            }}
                            movie={item}
                        />
                    )
                }}
            />
        </View>
    )
}

export default ForYou

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    text: {
        paddingTop: 24,
        paddingBottom: 8,
        color: Colors.TextColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
})

