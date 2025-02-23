import { Router } from "express";
import { recimewebhook, paymentcontrollers} from "./controllers/payment.controllers.js";



const router = Router();

router.post("/create-order", paymentcontrollers) 

router.get("/success", (req, res)=>{res.send("success")})

router.get("/failure", (req, res)=>{res.send("failure")})

router.get("/pending", (req, res)=>{res.send("pending")})

router.post("/webhook", recimewebhook)



export default router;  