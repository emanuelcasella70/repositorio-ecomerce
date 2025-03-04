import express from "express"
import routers from "./payment.routers.js"
import {PORT} from "./config.js"
import morgan from "morgan";
import path from "path"
import cors from "cors"


const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.use(routers)
app.use(express.static(path.resolve("public")));
app.listen(PORT);
console.log("server port", PORT)






