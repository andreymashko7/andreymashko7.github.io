import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { privateRoutes, publicRoutes } from "../router";
import About from "./../pages/About";
import Todo from "./../pages/Todo";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
