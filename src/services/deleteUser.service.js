import users from "../database/index";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((el) => el.uuid === id);
  if (userIndex === -1) {
    return "usuário não encontrado";
  }

  users.splice(userIndex, 1);
  return "User deleted with success";
};

export default deleteUserService;
