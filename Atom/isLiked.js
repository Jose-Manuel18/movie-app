import { atom, selector, useRecoilState } from "recoil";

export const isLiked = atom({
  key: "isLiked",
  default: [""],
});
