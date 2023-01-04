import { selector } from "recoil";

export const SeriesState = selector({
  key: "SeriesState",
  get: async () => {
    return await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.MOVIE_DB_KEY}&languages=en-US`,
    ).then((res) => res.json());
  },
});
