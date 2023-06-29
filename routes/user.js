import express from "express";
import {login , getDetail, forgotpass, getOrders} from "../controllers/userControllers.js";

const router=express.Router();

router.post('/login', login);
router.post('/forgotpass', forgotpass);
router.post('/details', getDetail);
router.get('/orders', getOrders);

export default router;