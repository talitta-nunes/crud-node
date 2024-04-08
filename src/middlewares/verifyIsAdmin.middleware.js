import users from "../database/index";

const verifyisAdminMiddleware = (req, res, next) => {
  const { uuid } = req.user;

  const user = users.find((user) => user.uuid === uuid);

  if (!user.isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyisAdminMiddleware;
