import { selector } from "recoil";

export const TrendingState = selector({
  key: "TrendingState",
  get: async () => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_DB_KEY}&languages=en-US`,
    ).then((res) => res.json());
  },
});
