import express from "express"
const r = express.Router()
r.get("/",(req,res)=>{
    res.send("This is the authentication page")

})
export default r