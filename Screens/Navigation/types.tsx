import { movieTypes } from '../../Components/Carousel/Types/types'
export type RootStackParamList = {
  Home: undefined
  Explore: undefined
  Like: undefined
  Account: undefined
  HomeTab: undefined
  DetailScreen: { movieDetails: movieTypes }
  SearchScreen: undefined
  SeeAllSeriesScreen: undefined
  SeeAllTrendingScreen: undefined
  SeeAllUpComing: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
