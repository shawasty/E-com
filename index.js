const express =  require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

mongoose.connect(
   process.env.MONGO_URL
).then(()=>console.log("DB Connection Successfull")).catch((err)=>{
    console.log(err)
});

app.get("/api/test",() => {
    console.log("test is successfull")
});


app.listen(PORT,()=>{
    console.log(`Express server listening on port: ${PORT}`);
})
