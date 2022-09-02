import { selector } from "recoil";

export const UpComingState = selector({
  key: "UpComingState",
  get: async () => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json());
  },
});
