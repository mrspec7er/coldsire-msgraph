import { Router } from "express";
import * as controller from "./controller";

const router: Router = Router();

router.get("/", controller.getDomains);
router.post("/", controller.createDomain);

export default router;
