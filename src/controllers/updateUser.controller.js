import updateUserService from "../services/updateUser.service";

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const updateUser = await updateUserService(id, name, email, password);
  return res.json(updateUser);
};

export default updateUserController;
