import express from "express"
import ar from "./routes/auth.js"
const app = express()

app.get("/",(req,res)=>{
    res.send("This is home page")
})

app.listen(5000,()=>{
    console.log('connected')
})

app.use("/auth",ar)