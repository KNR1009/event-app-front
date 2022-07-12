import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../../../lib/store";
import { UserState } from "../../../types";

export const Home: React.FC = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  console.log(user);
  const onClick = () => {
    axios
      .delete("http://127.0.0.1:3000/auth/sign_out", {
        headers: {
          "access-token": user.accessToken,
          client: user.client,
          uid: user.uid,
        },
      })
      .then((res) => {
        const headers: UserState = {
          accessToken: "",
          client: "",
          uid: "",
        };
        setUser(headers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>ホーム画面</h2>
      <button onClick={onClick}>ログアウト</button>
      <button
        onClick={() => {
          router.push("/event");
        }}
      >
        イベント一覧
      </button>
    </div>
  );
};
