import axios from "axios";

const API_URL="http://localhost:5000/api/blogs";
const createBlog=async(blogData)=>{
 const response=await axios.post(`${API_URL}`,blogData);
 return response.data;
}
const getBlogAll=async()=>{
 const response=await axios.get(`${API_URL}/getBlogAll`);
 return response.data;
}
const DeleteBlog=async(id)=>{
 const response=await axios.delete(`${API_URL}/DeleteBlog/${id}`);
 return response.data;
}
const getBlogAllbyId = async (id) => {
  const response = await axios.get(`${API_URL}/getBlogAllbyId/${id}`);
  return response.data;
};
const UpdateBlog = async (id, blogData) => {
  const response = await axios.put(
    `${API_URL}/UpdateBlog/${id}`,
    blogData
  );

  return response.data;
};
export default {createBlog,getBlogAll,DeleteBlog,getBlogAllbyId,UpdateBlog};