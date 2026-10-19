import Blog from "../models/Blog.js";
const createBlog = async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    const blog = await Blog.create(req.body);

    res.status(200).json({
      data: blog,
      message: "Blog created Successfully"
    });

  } catch (error) {
    console.log("CREATE BLOG ERROR:", error);

    res.status(500).json({
      message: "Error while creating Blog",
      error: error.message
    });
  }
};
const DeleteBlog=async(req,res)=>{
  try{
    const blog=await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({
      data:blog,
      message:"Blog Deleted SuccessFully By Id"
    });
  }catch(error){
    res.status(500).json({
      message:"Error while Delete Blog By Id"
    })
  }
}
const getBlogAll=async(req,res)=>{
  try{
    const blog=await Blog.find();
    res.status(200).json({
      data:blog,
      message:"Blogs Fetch SuccessFully"
    });
  }catch(error){
    res.status(500).json({
      message:"Error while Fetch Blogs"
    })
  }
}
const getBlogAllbyId=async(req,res)=>{
  try{
   const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      data:blog,
      message:"Blogs Fetch By Id SuccessFully"
    });
  }catch(error){
    res.status(500).json({
      message:"Error while Fetch Blogs By Id"
    })
  }
}
const SortBlogByCategory=async(req,res)=>{
  try{
    const blog=await Blog.find({category:req.params.category});
    res.status(200).json({
      data:blog,
      message:"Blogs Fetch By sorted SuccessFully"
    });
  }catch(error){
    res.status(500).json({
      message:"Error while Fetch Blogs By sorted"
    })
  }
}
const UpdateBlog=async(req,res)=>{
  try{
    const blog=await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true});
    res.status(200).json({
      data:blog,
      message:"Blog Update SuccessFully"
    });
  }catch(error){
    res.status(500).json({
      message:"Error while Updateing Blog"
    })
  }
}
export default {createBlog,getBlogAll,getBlogAllbyId,SortBlogByCategory,UpdateBlog,DeleteBlog};