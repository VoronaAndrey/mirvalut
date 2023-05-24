import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import { UserRoutes } from "./helpers/routes";
import Home from "./pages/Home/Home";
import NotificationProvider from "./components/notification/notificationContext";
import Post from "./pages/Post";
import PostCreate from "./pages/PostCreate";
const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.authData.accessToken);

  return (
    <Router>
      <NotificationProvider>
        <Routes>
          <Route path={UserRoutes.Home} element={<Home />} />
          <Route path={UserRoutes.Post} element={<Post />} />
          <Route path={UserRoutes.CreatePost} element={<PostCreate />} />
          <Route path="/" element={<Navigate replace to={UserRoutes.Home} />} />
          <Route path="*" element={<Navigate replace to={UserRoutes.Home} />} />
        </Routes>
      </NotificationProvider>
    </Router>
  );
};

export default App;
