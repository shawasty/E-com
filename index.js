const express =  require("express");
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");

mongoose.connect ("mongodb+srv://shawasty:<password>@cluster0.twhjc.mongodb.net/?retryWrites=true&w=majority")

const app = express();

app.listen(PORT,()=>{
    console.log(`Express server listening on port: ${PORT}`);
})
