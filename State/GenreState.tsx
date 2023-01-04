import { selector } from "recoil";

export const GenreState = selector({
  key: "GenreState", // unique ID (with respect to other atoms/selectors)
  get: async () => {
    return await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_DB_KEY}&languages=en-US`,
    ).then((res) => res.json());
  },
});
