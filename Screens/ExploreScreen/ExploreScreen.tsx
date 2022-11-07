import { FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Components/Utils/Colors'
import SearchButton from '../../Components/SearchBarButton/SearchButton'
import { useRecoilValueLoadable } from 'recoil'
import { GenreState } from '../../State/GenreState'
import { NowPlayingState } from '../../State/NowPlayingState'
import ForYou from '../../Components/Card/ForYou/ForYou'
import { ExploreImages } from '../Index/index'
import { take } from 'lodash'
import { selectedState } from './type'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { ExploreGenre } from './ExploreGenre'

export const ExploreScreen = () => {
    const { top } = useSafeAreaInsets()
    const [selected, setSelected] = useState<selectedState | null>(null)

    const { state, contents } = useRecoilValueLoadable(NowPlayingState)
    const { state: genreState, contents: genreContents } =
        useRecoilValueLoadable(GenreState)

    const currentMovie = contents?.results?.filter(
        (movies: { genre_ids: (selectedState | null)[] }) =>
            movies?.genre_ids.includes(selected)
    )

    if (state === 'hasError' || state === 'loading') return null
    if (genreState === 'hasError' || genreState === 'loading') return null

    return (
        <View>
            <ScrollView top={top}>
                <SearchButton />
                <FlatList
                    data={
                        selected === null
                            ? take(contents.results, 1)
                            : take(currentMovie, 1)
                    }
                    nestedScrollEnabled={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return <ExploreImages index={index} item={item} />
                    }}
                    ListHeaderComponent={
                        <ExploreGenre
                            selected={selected}
                            setSelected={setSelected}
                            genreContents={genreContents?.genres}
                        />
                    }
                    ListFooterComponent={<ForYou />}
                />
                {selected !== null && currentMovie.length === 0 ? (
                    <Text>Nothing to see here</Text>
                ) : null}
                <Spacer />
            </ScrollView>
        </View>
    )
}

const ScrollView = styled.ScrollView<{ top: number }>`
    flex: 1;
    padding-top: ${(props) => props.top};
    background-color: ${Colors.DarkPurple};
`
const View = styled.View`
    flex: 1;
`
const Spacer = styled.View`
    height: 30;
`

