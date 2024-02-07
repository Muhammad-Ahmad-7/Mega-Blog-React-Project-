/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* TODO:  */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading Your Data...</div>
  );

  // return (
  //   <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
  //     <div className="w-full block">
  //       {" "}
  //       {/* <Header /> */}
  //       <h1>This is Header</h1>
  //       <main>
  //         TODO: <Outlet />
  //       </main>
  //       <Footer />
  //     </div>
  //   </div>
  // );
}

export default App;
