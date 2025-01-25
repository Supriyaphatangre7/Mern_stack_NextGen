import mongoose from "mongoose";

const MovieSchema=new mongoose.Schema({
    moviename:String,
    hero:String,
    herione:String,
    year:Number,
    rating:Number,


});

const MovieModel=new mongoose.model('moviedata',MovieSchema);

export default MovieModel;
   
