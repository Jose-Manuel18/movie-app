import { selector } from "recoil";

export const TrendingState = selector({
  key: "TrendingState",
  get: async () => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json());
  },
});
