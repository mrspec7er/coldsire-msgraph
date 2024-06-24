import { Router } from "express";
import * as controller from "./controller";
import { upload } from "../../middleware/fileStorage";

const router: Router = Router();

router.get("/", controller.getUser);
router.get("/token", controller.getUserToken);
router.post("/", controller.createUser);
router.get("/organizations", controller.getOrganizationUsers);
router.put(
  "/:id/profile",
  upload.single("profile"),
  controller.updateUserProfile
);

export default router;
