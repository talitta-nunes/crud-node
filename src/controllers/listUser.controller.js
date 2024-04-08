import createUserListService from "../services/listUser.service";

const createUserListController = (req, res) => {
  const user = createUserListService();
  return res.json(user);
};
export default createUserListController;
