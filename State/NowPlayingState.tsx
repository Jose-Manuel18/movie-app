import { selector } from "recoil";
import { movieData } from "../Components/Carousel/SeriesCarousel/types";

export const NowPlayingState = selector<movieData | undefined>({
  key: "NowPlayingState",
  get: async () => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US",
    ).then((res) => res.json());
  },
});
