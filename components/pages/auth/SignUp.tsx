import React, { useState } from "react";
import styled from "styled-components";
import { UserInfo } from "../../../types";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  const onClick = () => {
    const params = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      imageUrl: imageUrl,
    };
    console.log("aaa");
    axios
      .post("http://127.0.0.1:3000/auth/", params)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <InputContainer>
      <h2>新規登録画面</h2>
      <div className="input-form">
        <label className="input-label">ユーザー名</label>
        <input
          type="text"
          onChange={(e) => {
            onChange(e, setName);
          }}
          value={name}
        />
      </div>
      <div className="input-form">
        <label className="input-label">メールアドレス</label>
        <input
          type="email"
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
      <div className="input-form">
        <label className="input-label">パスワード確認用</label>
        <input
          type="password"
          onChange={(e) => {
            onChange(e, setPasswordConfirmation);
          }}
          value={passwordConfirmation}
        />
      </div>
      <div className="input-form">
        <label className="input-label">画像</label>
        <input
          type="file"
          onChange={(e) => {
            onChange(e, setImageUrl);
          }}
          value={imageUrl}
        />
      </div>
      <button className="button" onClick={onClick}>
        新規登録
      </button>
    </InputContainer>
  );
};

const InputContainer = styled.div`
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
