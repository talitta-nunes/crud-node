import users from "../database/index";

const verifyAuthUsersMiddleware = (req, res, next) => {
  const { uuid } = req.user;
  const { id } = req.params;
  //console.log("admn middleware");
  const user = users.find((user) => user.uuid === uuid);

 
  if (uuid !== id && !user.isAdm) {
   
    return res.status(401).json({ message: "Missing admin permissions" });
  }
  next();
};

export default verifyAuthUsersMiddleware;
