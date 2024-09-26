const mongoose = require("mongoose");
const conn=async(req,res)=>{
    try {
        await mongoose
        .connect(
            "mongodb+srv://nagalaleelapavan2511:nlpkv@cluster0.cijykix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>{
            console.log("Database connected");
        });
        console.log("Successfully Connected");

    } catch (error) {
        req.status(400).json({
            message:"Not connected",
        });
    }
}
conn();