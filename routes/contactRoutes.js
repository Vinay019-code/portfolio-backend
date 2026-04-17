import express from "express";
import { sendMessage } from "../controllers/contactController.js";

// import { sendMessage } from "../controllers/contactController.js";

// router.post("/", sendMessage);


const router = express.Router();

router.post("/", sendMessage);

export default router;