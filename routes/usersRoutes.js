import express from "express";
import { getUsers } from "../controllers/usersController.js"; // recuerda que es com un archui

const router = express.Router();


router.get('/',getUsers); 

export default router;