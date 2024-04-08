import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];// remove o "token" do json e devolve somente o token puro

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    const { sub } = decoded;

    req.user = {
      uuid: sub,
    };
    next();
  });
};

export default verifyAuthTokenMiddleware;
