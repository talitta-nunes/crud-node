import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import createUserListController from "../controllers/listUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import createUserProfileController from "../controllers/createUserProfile.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyisAdminMiddleware from "../middlewares/verifyIsAdmin.middleware";
import verifyAuthUsersMiddleware from "../middlewares/verifyAuthUsers.middleware";

const router = Router();

router.post("", verifyEmailMiddleware, createUserController);

router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyisAdminMiddleware,
  createUserListController
);

router.get("/profile", verifyAuthTokenMiddleware, createUserProfileController);

router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAuthUsersMiddleware,
  updateUserController
);

router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAuthUsersMiddleware,
  deleteUserController
);

export default router;
