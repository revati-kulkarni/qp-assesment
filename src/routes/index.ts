import { Router } from "express";
import authRoutes from "../modules/auth/route";
import groceryRoutes from "../modules/grocery/route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/grocery", groceryRoutes);

export default router;
