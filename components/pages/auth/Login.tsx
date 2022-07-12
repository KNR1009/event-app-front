import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../lib/store";

import styled from "styled-components";
import { UserState } from "../../../types";
import { useRouter } from "next/router";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUser = useSetRecoilState(userState);
  const router = useRouter();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  const onClick = () => {
    const params = {
      email: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:3000/auth/sign_in", params)
      .then((res) => {
        // header情報をRecoilに定義
        const headers: UserState = {
          accessToken: res.headers["access-token"],
          client: res.headers["client"],
          uid: res.headers["uid"],
        };
        setUser(headers);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginContainer>
      <h2>ログイン画面</h2>
      <div className="input-form">
        <label className="input-label">メールアドレス</label>
        <input
          type="text"
          onChange={(e) => {
            onChange(e, setEmail);
          }}
          value={email}
        />
      </div>
      <div className="input-form">
        <label className="input-label">パスワード</label>
        <input
          type="password"
          onChange={(e) => {
            onChange(e, setPassword);
          }}
          value={password}
        />
      </div>
      <button className="button" onClick={onClick}>
        ログイン
      </button>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  padding: 100px;
  .input-label {
    display: block;
  }
  .input {
    display: block;
  }
  .input-form {
    margin-top: 20px;
  }

  .input-label {
    margin-right: 10px;
  }
  .button {
    margin-top: 20px;
  }
`;
