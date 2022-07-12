import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../lib/store";

export const Event = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  console.log(user);
  return <div>イベント一覧</div>;
};
