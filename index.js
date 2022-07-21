const express =  require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require ("./routes/user")

dotenv.config();
const app = express();

mongoose.connect(
   process.env.MONGO_URL
).then(()=>console.log("DB Connection Successfull")).catch((err)=>{
    console.log(err)
});

app.use(express.json())
app.use("/api/users", userRoute);


app.listen(PORT,()=>{
    console.log(`Express server listening on port: ${PORT}`);
})
