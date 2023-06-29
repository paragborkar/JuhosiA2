import express from "express";
import {getAdminDetails, getAdminDetails1} from "../controllers/adminControllers.js";

const router=express.Router();

router.get('/adminDetails', getAdminDetails);
router.get('/getd', getAdminDetails1);



export default router;