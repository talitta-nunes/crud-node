import users from "../database/index";

const createUserProfileService = (uuid) => {
  const profileUser = users.find((user) => user.uuid === uuid);
  const noPassword = { ...profileUser };
  delete noPassword.password;
  return noPassword;
};
export default createUserProfileService;
