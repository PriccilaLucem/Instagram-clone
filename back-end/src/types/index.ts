export interface PostInterface {
  authorId: string;
  description: string;
  contentType: string;
  data: Buffer;
  publication_date?: Date;
}

export interface FollowerInterface {
  followerId: string;
}
export interface FollowingInterface {
  followingUserId: string;
}
export interface UserInterface {
  username: string;
  email: string;
  hash: string;
  password?: string;
  _id: string;
  followers: Array<FollowerInterface>;
  following: Array<FollowingInterface>;
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
