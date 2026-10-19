import mongoose from "mongoose";
const BlogSchema=new mongoose.Schema(
  {
    title:{
      type:String,
      required:true
    },
    content:{
      type:String,
      required:true
    },
    author:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true
    },
    image:{
      type:String,
      required:true
    }
  },
    {
      timestamps:true
    }
);

const Blogs=mongoose.model("Blog",BlogSchema)

export default Blogs