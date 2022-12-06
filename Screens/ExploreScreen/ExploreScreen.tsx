import React, { useState } from 'react'
import { Colors } from '../../Components/Utils/Colors'
import SearchButton from '../../Components/SearchBarButton/SearchButton'
import { useRecoilValueLoadable } from 'recoil'
import { GenreState } from '../../State/GenreState'
import { NowPlayingState } from '../../State/NowPlayingState'
import ForYou from '../../Components/Card/ForYou/ForYou'
import { selectedState } from './type'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { ExploreGenre } from './ExploreGenre'
import { Block } from '../../Components/Block'
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
  const View = styled.View`
    flex: 1;
    padding-top: ${top};
    background-color: ${Colors.DarkPurple};
  `

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchButton />
        <Block size={8} />
        <ExploreGenre
          selected={selected}
          setSelected={setSelected}
          genreContents={genreContents?.genres}
        />
        <BiggerPosterContainer>
          <BigPoster
            source={{
              uri:
                selected === null
                  ? `https://image.tmdb.org/t/p/w500${contents.results[0].poster_path}`
                  : `https://image.tmdb.org/t/p/w500${currentMovie[0].poster_path}`,
            }}
          />
          <OutterContainer>
            <MiddleContainer>
              <SmallerPoster
                source={{
                  uri:
                    selected === null
                      ? `https://image.tmdb.org/t/p/w500${contents.results[1].poster_path}`
                      : `https://image.tmdb.org/t/p/w500${currentMovie[1].poster_path}`,
                }}
              />
            </MiddleContainer>
            <SmallPosterContainer>
              <SmallerPoster
                source={{
                  uri:
                    selected === null
                      ? `https://image.tmdb.org/t/p/w500${contents.results[2].poster_path}`
                      : `https://image.tmdb.org/t/p/w500${currentMovie[2]?.poster_path}`,
                }}
              />
            </SmallPosterContainer>
          </OutterContainer>
        </BiggerPosterContainer>
        <ForYou />
      </ScrollView>
    </View>
  )
}
const ScrollView = styled.ScrollView``

const BiggerPosterContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-height: 300px;
  padding: 0px 20px;
`
const OutterContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  /* background-color: white; */
`
const SmallPosterContainer = styled.View`
  flex: 1;
  padding: 8px 8px;
`
const MiddleContainer = styled.View`
  flex: 1;
  padding: 8px 8px;
`
const BigPoster = styled.Image`
  height: 300px;
  width: 200;
  border-radius: 16px;
`
const SmallerPoster = styled.Image`
  width: 100px;
  height: 138px;
  border-radius: 16px;
`

