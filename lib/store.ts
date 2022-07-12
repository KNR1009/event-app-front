import { atom, RecoilState } from "recoil";
import { UserState } from "../types";

export const userState: RecoilState<UserState> = atom({
  key: "user",
  default: {
    accessToken: "",
    client: "",
    uid: "",
  },
});
