import { Router } from "express";
import * as controller from "./controller";

const router: Router = Router();

router.get("/", controller.getCurrentUsers);

export default router;
