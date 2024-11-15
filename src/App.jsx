import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/me" element={<ProfilePage />} />
      <Route path="/register" element={<RegistrationPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
