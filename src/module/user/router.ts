import { Router } from "express";
import * as controller from "./controller";

const router: Router = Router();

router.get("/", controller.getUser);
router.get("/token", controller.getUserToken);
router.post("/", controller.createUser);
router.get("/organizations", controller.getOrganizationUsers);

export default router;
