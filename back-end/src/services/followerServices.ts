export const followUser = async (loggedUser: any, userToBeFollowed: any) => {
  loggedUser.following.push({ followingUserId: userToBeFollowed._id });
  userToBeFollowed.followers.push({ followerId: userToBeFollowed._id });
  await loggedUser.save();
  await userToBeFollowed.save();
};

export const unfollowUser = async (loggedUser: any, userToBeFollowed: any) => {
  loggedUser.following.pull({ followingUserId: userToBeFollowed._id });
  userToBeFollowed.followers.pull({ followerId: userToBeFollowed._id });
  await loggedUser.save();
  await userToBeFollowed.save();
};
