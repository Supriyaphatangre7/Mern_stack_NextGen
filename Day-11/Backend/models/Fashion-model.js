import mongoose from "mongoose";

const FashionShema=new mongoose.Schema({

    product:String,
    price:Number,
    quantity:Number,
    image:String,

});

const Fashion=new mongoose.model("fashion",FashionShema);

export default Fashion;