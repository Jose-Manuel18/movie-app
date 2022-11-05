import { FlatList, View } from 'react-native'
import { SmallCard } from '../CarouselCards/SmallCard'
import { useNavigation } from '@react-navigation/native'
import { take } from 'lodash'
import { movieTypes } from '../Types/types'
export function TrendingCarousel({ info }: { info: movieTypes }) {
    const { navigate } = useNavigation()

    return (
        <View onTouchMove={(e) => e.stopPropagation()}>
            <FlatList
                data={take(info, 10)}
                keyExtractor={(item) => item.id}
                horizontal={true}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <SmallCard
                            onPress={() => {
                                navigate('DetailScreen', {
                                    movieDetails: item,
                                })
                            }}
                            movie={item}
                        />
                    )
                }}
            />
        </View>
    )
}

