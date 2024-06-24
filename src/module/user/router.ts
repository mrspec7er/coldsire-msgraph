import { Router } from "express";
import * as controller from "./controller";

const router: Router = Router();

router.get("/", controller.getUser);
router.get("/token", controller.getUserToken);

export default router;
