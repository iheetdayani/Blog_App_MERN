import mongoose from "mongoose";
const Connectdb=async()=>{
  try{
  await mongoose.connect(process.env.Mongo_URL);
  console.log("DataBase Connected");
  }catch(error){
    console.log(error)
  }
}
export default Connectdb;