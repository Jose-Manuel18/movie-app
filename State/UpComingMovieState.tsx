import { selector } from "recoil";

export const UpComingState = selector({
  key: "UpComingState",
  get: async () => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_DB_KEY}&languages=en-US`,
    ).then((res) => res.json());
  },
});
