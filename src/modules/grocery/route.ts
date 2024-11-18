import { Router } from "express";
import { createGrocery, getGroceries } from "./grocery.controller";
import { authenticate, authorize } from "../../middleware/authToken";

const router = Router();

router.post("/", authenticate, authorize(["admin"]), createGrocery);
router.get("/", authenticate, authorize(["admin", "user"]), getGroceries);

export default router;
