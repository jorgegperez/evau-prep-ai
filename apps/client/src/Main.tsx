import React from "react";
import { View } from "react-native";
import { AppBar, Dashboard } from "./components";
import { Routes, Route } from "react-router-native";
import { LoginPage, LearningPage } from "./pages";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/learn" element={<LearningPage />} />
      </Routes>
    </View>
  );
};

export default Main;
