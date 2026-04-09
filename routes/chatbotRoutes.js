import express from "express";
import { sendMessage } from "../controllers/chatbotController.js";

const router = express.Router();

// Fix: Ensure sendMessage is correctly imported
if (!sendMessage) {
  throw new Error("sendMessage function is undefined. Check chatbotController.js");
}

router.post("/message", sendMessage);

export default router;
