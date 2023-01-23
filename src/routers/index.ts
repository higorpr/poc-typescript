import { Router } from "express";
import { studentRouter } from "./studentRouter.js";

const router = Router();

router.use(studentRouter);

export default router;
