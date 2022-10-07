export interface PostInterface {
  description: string;
  contentType: string;
  data: Buffer;
  publication_date?: Date;
}

export interface UserInterface {
  username: string;
  email: string;
  hash: string;
  password?: string;
  _id: string;
  post: Array<PostInterface>;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface jwtDecodedUserInterface {
  _id: string;
  username: string;
  email: string;
}
