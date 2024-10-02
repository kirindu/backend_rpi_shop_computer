import express from "express";
import { createShopComputer } from "../controllers/shopsComputersController.js";

const router = express.Router();


router.post('/',createShopComputer); 

export default router;