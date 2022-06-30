import Todo from "./../pages/Todo";
import About from "./../pages/About";

export const privateRoutes = [
  {
    path: "",
    element: null,
    exact: null,
  },
  {
    path: "",
    element: null,
    exact: null,
  },
  {
    path: "",
    element: null,
    exact: null,
  },
];

export const publicRoutes = [
  {
    path: "/",
    element: <About />,
    exact: true,
  },
  {
    path: "/todo",
    element: Todo,
    exact: true,
  },
  //   {
  //     path: "/music",
  //     component: Music,
  //     exact: true,
  //   },
];
