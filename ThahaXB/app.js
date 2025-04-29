const express =require("express")
const { connectDatabase } = require("./database/database")

const app = express()
const cors =require("cors")


const authRoute = require("./routes/authRoute")
const serviceRoute =require("./routes/serviceRoute")



require("dotenv").config()

app.use(cors({
    origin: ["http://localhost:5173", "https://thahax-platform.vercel.app"]
}));
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
app.use("/api/services",serviceRoute)



const PORT =process.env.PORT
//listen server
app.listen(PORT,()=>{
    console.log("server has started at PORT " + PORT)
})