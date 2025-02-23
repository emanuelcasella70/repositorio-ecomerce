import { MercadoPagoConfig, Preference } from 'mercadopago';
import express from "express"
import routers from "./payment.routers.js"
import {PORT} from "./config.js"
import morgan from "morgan";
import path from "path"

const app = expess();

app.use(morgan("dev"));

app.use(routers)

app.use(express.static(path.resolve("public")));

app.listen(PORT);
console.log("server port", PORT)

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-4928203189775956-071122-f1c38d3beda0fc37f7f6b7e8e1397de7-1895818481' });    

app.post("/create-order", (req,res)=>{

    const preference = new Preference(client);
    
    const result = preference.create({
      body: {
        items: [
          {
            title: req.body.title,
            quantity: Number(req.body.quantity),
            unit_price: Number(req.body.unit_price),
          },
        ],
           back_urls: {
            success: "http://localhost:3000/success",
            failure: "http://localhost:3000/",
            pending: "http://localhost:3000/pending"
        },
        notification_url:"https://c5af-186-137-158-156.ngrok-free.app/webhook"
      }
    })

    
    res.send(result)
    
    
    // export const recimewebhook = (rep, res)=>{
    //   console.log(rep.query);
    //   res.send("webhook");
    
    // }

})




// console.log(allProducts) 




