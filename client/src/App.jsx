import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import Layout from "./components/Layout";
import { UserContextProvider } from "./context/userContext.jsx";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
