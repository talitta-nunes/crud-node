import createUserProfileService from "../services/createUserProfile.service";

const createUserProfileController = (req, res) => {
  const { uuid } = req.user;
  const user = createUserProfileService(uuid);
  return res.json(user);
};
export default createUserProfileController;
