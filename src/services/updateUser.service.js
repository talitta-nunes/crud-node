import users from "../database/index";
import * as bcrypt from "bcryptjs";

const updateUserService = async (id, name, email, password) => {
  const userIndex = users.findIndex((el) => el.uuid === id);
  if (userIndex === -1) {
    throw new Error("User not found");
  }
  const user = users[userIndex];

  
  const updateUser = {
    name: name ? name : user.name,
    email: email ? email : user.email,
    password: password ? await bcrypt.hash(password, 10) : user.password,
    updatedOn: new Date().toISOString(),
  };
  users[userIndex] = { ...users[userIndex], ...updateUser };
  const showUser = {
    ...users[userIndex],
  };
  delete showUser.password;

  return showUser;
};

export default updateUserService;
