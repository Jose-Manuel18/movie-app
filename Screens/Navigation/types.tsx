export type RootStackParamList = {
  Home: undefined
  Explore: undefined
  Like: undefined
  Account: undefined
  HomeTab: undefined
  DetailScreen: { movieDetails: object }
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
