import { selector } from "recoil";

export const SeriesState = selector({
  key: "SeriesState",
  get: async () => {
    return await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json());
  },
});
