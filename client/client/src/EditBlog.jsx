import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogService from "./services/BlogService";
function EditBlog() {
  const { id } = useParams();
  const [Blog, SetBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    image: ""
  });
  useEffect(() => {

    const loadBlog = async () => {

      try {

        const response = await BlogService.getBlogAllbyId(id);

        console.log(response);

        SetBlog(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    loadBlog();

  }, [id]);
  const HandleChange = (e) => {
    SetBlog({
      ...Blog,
      [e.target.name]: e.target.value
    })
  }
  // Update blog
  const HandleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await BlogService.UpdateBlog(id, Blog);

      console.log(response);

      alert("Blog Updated Successfully");

    } catch (error) {

      console.log(error);

      alert("Error while updating Blog");

    }

  };
  return (
    <div>
      <div className="container text-center">
        <h3>Edit Blog</h3>
      </div>

      <form onSubmit={HandleSubmit}>
        <div className="container mt-5">
          <div className="card shadow-lg p-4">

            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={Blog.title}
                onChange={HandleChange}
              />
            </div>

            <div className="mb-3">
              <label>Content</label>
              <textarea
                className="form-control"
                name="content"
                value={Blog.content}
                onChange={HandleChange}
              />
            </div>

            <div className="mb-3">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={Blog.author}
                onChange={HandleChange}
              />
            </div>

            <div className="mb-3">
              <label>Category</label>

              <select
                className="form-control"
                name="category"
                value={Blog.category}
                onChange={HandleChange}
              >
                <option value="">Select Category</option>
                <option value="Study">Study</option>
                <option value="Psycological">Psycological</option>
                <option value="Human reseach">Human reseach</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Image</label>

              <input
                type="text"
                className="form-control"
                name="image"
                value={Blog.image}
                onChange={HandleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success"
            >
              Update Blog
            </button>

          </div>
        </div>
      </form>
    </div>
  );
}
export default EditBlog;