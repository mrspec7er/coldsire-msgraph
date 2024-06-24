import { Router } from "express";
import * as controller from "./controller";

const router: Router = Router();

router.get("/", controller.getEmails);
router.post("/", controller.sendEmails);

export default router;
