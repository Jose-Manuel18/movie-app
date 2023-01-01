import { atom } from "recoil";
import { User } from "firebase/auth";
import { GenreProps } from "../Components/Carousel/SeriesCarousel/types";
export const userState = atom<User | null>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
});
export const Genre = atom<GenreProps[]>({
  key: "genre",
  default: [],
});
export const movieId = atom({
  key: "movieId",
  default: null,
});

export const userLikes = atom({
  key: "userLikes",
  default: [],
});
