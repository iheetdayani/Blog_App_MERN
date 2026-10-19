import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import BlogList from "./BlogList";
import EditBlog from "./EditBlog";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Blog />} />

        <Route path="/blog" element={<BlogList />} />

        <Route path="/editblog/:id" element={<EditBlog />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App;
