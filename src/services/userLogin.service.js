import users from "../database/index";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((el) => el.email === email);
  if (!user) {
    throw new Error("Wrong email/password");
  }
  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.uuid,
  });
  return { token };
};
export default userLoginService;
