import express from "express";
import {handler} from "../front-end/build/handler.js"

const app = express();
app.use(handler)

app.listen(3000, ()=>{
    console.log("server running on port 3000")
})