import users from "../database/index";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserHash = {
    uuid: uuidv4(),
    email,
    name,
    isAdm,
    password: hashedPassword,
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
  };
  users.push(newUserHash);

  const newUser = {
    uuid: newUserHash.uuid,
    email,
    name,
    isAdm,
    createdOn: newUserHash.createdOn,
    updatedOn: newUserHash.updatedOn,
  };

  return newUser;
};
export default createUserService;
