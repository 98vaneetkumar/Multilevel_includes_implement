require("dotenv").config();
const app=require("express")()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./config/connectionDB").connect();
require("./config/connectionDB").syn();
//Due to this table is create at database but not use it not table create
require("./Models/index");
app.get("/",(req,res)=>{
     res.send("Home page")
})

const aRouter= require("./routes/aRouter")
const bRouter=require("./routes/bRouter")
const cRouter= require("./routes/cRouter")
const dRouter= require("./routes/dRouter")
const eRouter= require("./routes/eRouter")


app.use("/a",aRouter)
app.use("/b",bRouter)
app.use("/c",cRouter)
app.use("/d",dRouter)
app.use("/e",eRouter)

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})