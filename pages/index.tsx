import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { Home } from "../components/pages/home";
import { userState } from "../lib/store";

const HomePage: NextPage = () => {
  return <Home />;
};

export default HomePage;
