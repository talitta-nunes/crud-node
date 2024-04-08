import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;
  try {
    const userLogin = userLoginService(email, password);
    return res.json(userLogin);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default userLoginController;
