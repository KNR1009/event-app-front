export type UserInfo = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  image_url: string;
};

// Recoilのデータ管理
export type UserState = {
  accessToken: string;
  client: string;
  uid: string;
};
