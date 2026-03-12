import { Router } from "express";
import { selectRole } from "../controllers/user.controller";

const router = Router();

router.patch("/role", selectRole);

export default router;