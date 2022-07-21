const express =  require("express");
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
   process.env.MONGO_URL
).then(()=>console.log("DB Connection Successfull")).catch((err)=>{
    console.log(err)
});

const app = express();

app.listen(PORT,()=>{
    console.log(`Express server listening on port: ${PORT}`);
})
