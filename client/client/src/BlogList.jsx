import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogService from "./services/BlogService";
function BlogList() {
  const navigate = useNavigate();
  const [blogs, SetBlogs] = useState([]);
  useEffect(() => {
    const loadBlogs = async () => {
      const response = await BlogService.getBlogAll();
      SetBlogs(response.data);
    }
    loadBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      const response = await BlogService.DeleteBlog(id);
      alert("Blog Deleted SuccessFully");
      SetBlogs(blogs.filter((blog) => blog._id !== id));
      console.log(response);
    } catch (error) {
      console.log(error);
      console.log("Deleted SuccessFully");
    }

  }
  return (
    <div className="container mt-5 text-center">
      <table className="table table-bordered table-striped table-hover">
        <thead className="table table-header table-striped table-hover">
          <tr> <th>Title</th> <th>Content</th> <th>Author</th> <th>Category</th> <th>Action</th> </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.content}</td>
              <td>{blog.author}</td>
              <td>{blog.category}</td>
              <td><button className="btn btn-danger" onClick={() => deleteBlog(blog._id)}>Delete</button>
                <button className="btn btn-warning mt-4" onClick={() => navigate(`/editblog/${blog._id}`)}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}

export default BlogList
