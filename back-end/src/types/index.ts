export interface UserInterface {
  username: string;
  email: string;
  hash: string;
  password?: string;
  _id: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}
