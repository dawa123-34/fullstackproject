const express =require("express")
const { connectDatabase } = require("./database/database")

const app = express()

const authRoute = require("./routes/authRoute")



require("dotenv").config()


app.use(express.json())


//Database connection
connectDatabase()

 
//test api to check if server is live or not
app.get("/",(req,res)=>{
    res.status(200).json({
        
        message: " I am live"
    })
})

app.use("",authRoute)



const PORT =process.env.PORT
//listen server
app.listen(PORT,()=>{
    console.log("server has started at PORT " + PORT)
})