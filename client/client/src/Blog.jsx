import { useState } from "react";
import BlogService from "./services/BlogService";
function Blog() {
  const [Blog, SetBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    image: "",
  })
  const HandleChange = (e) => {
    SetBlog({
      ...Blog,
      [e.target.name]: e.target.value
    });

  };
  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await BlogService.createBlog(Blog);

      alert("Blog Created Successfully");

      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Error while creating Blog");
    }
    SetBlog({
      title: "",
      content: "",
      category: "",
      author: "",
      image: ""
    })
  };
  return (
    <div>
      <div className="container text-center">
        <h3>Blog Application</h3>
      </div>
      <form onSubmit={HandleSubmit}>
        <div className="container mt-5">
          <div className="card shadow-lg">
            <div className="col-md-12">
              <label>Title</label>
              <input className="form-control" type="text" onChange={HandleChange} value={Blog.title} name="title"></input>
            </div>
            <div className="col-md-12">
              <label>content</label>
              <textarea className="form-control" onChange={HandleChange} value={Blog.content} name="content">

              </textarea>
            </div>
            <div className="col-md-12">
              <label>author</label>
              <input className="form-control" type="text" onChange={HandleChange} value={Blog.author} name="author"></input>
            </div>
            <div className="col-md-12">
              <label>Category</label>
              <select onChange={HandleChange}
                className="form-control"
                value={Blog.category}
                name="category">
                <option value="Study">Study</option>
                <option value="Psycological">Psycological</option>
                <option value="Human reseach">Human reseach</option>
              </select>
            </div>
            <div className="col-md-12">
              <label>Image</label>
              <input type="text" className="form-control" onChange={HandleChange} value={Blog.image} name="image"></input>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary mt-5 mb-3">Add Blog</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Blog
