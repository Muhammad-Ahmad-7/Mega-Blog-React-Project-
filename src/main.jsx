/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AddPost from "./pages/AddPost.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import AuthLayout from "./components/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

// const router2 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="login" element={<AuthLayout authentication={false} />}>
//         <Route path="" element={<Login />} />
//       </Route>
//       <Route path="signup" element={<AuthLayout authentication={false} />}>
//         <Route path="" element={<Signup />} />
//       </Route>
//       <Route path="all-posts" element={<AuthLayout authentication />}>
//         <Route path="" element={<AllPosts />} />
//       </Route>
//       <Route path="add-post" element={<AuthLayout authentication />}>
//         <Route path="" element={<AddPost />} />
//       </Route>
//       <Route path="edit-post/:slug" element={<AuthLayout authentication />}>
//         <Route path="" element={<EditPost />} />
//       </Route>
//       <Route path="post/:slug">
//         <Route path="" element={<Post />} />
//       </Route>
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
