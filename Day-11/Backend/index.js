import express from "express";
import mongoose from "mongoose";
import MovieModel from "./models/Movie-model.js";
import Fashion from "./models/Fashion-model.js";
import cors from 'cors';


const app=express();

app.use(express.json());
app.use(cors());

const PORT=3000;



app.post("/addmovie",async(req,res)=>{
    try{
        const newdata=new MovieModel(req.body);
        await newdata.save();
        res.send("data send successfully");

    }catch(error)
    {
        console.log(error);
    }
});


app.get("/getmovie",async(req,res)=>{
   try{
        const response=await MovieModel.find({});
        return res.status(200).json({message:response});
   }
   catch(error)
   {
       console.log(error)
   }
});

app.post("/addproduct",async(req,res)=>{
    try{
        const response=new Fashion(req.body);
        await response.save();
        res.send("data send successfully");

    }catch(error)
    {
        console.log(error);
    }
});


app.get("/getproduct",async(req,res)=>{
    try{
         const response=await Fashion.find({});
         return res.status(200).json({message:response});
    }
    catch(error)
    {
        console.log(error)
    }
 });



mongoose.connect("mongodb+srv://supriya:zGvklWbpAb5R74QJ@cluster0.lrukr.mongodb.net/").then(()=>{
    console.log("mongodb connection sucessful")
});


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})

