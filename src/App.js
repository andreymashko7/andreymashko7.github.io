// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Todo from "./pages/Todos";
import Posts from "./pages/Posts";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Error from "./pages/Error";
import PostIdPage from "./pages/PostIdPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="todo" element={<Todo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
