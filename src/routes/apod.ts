import express, { Request, Response, Router } from "express";
//import { validateSignUp, validateLogin } from "../validators/authValidator";
import {getAPOD } from "../controller/apodController";

const router: Router = express.Router();

router.get("/apod", getAPOD);


export default router;
