import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "../lib/store";

const Home: NextPage = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  console.log(user);

  return (
    <div>
      <h2>ホーム画面</h2>
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

export default Home;
