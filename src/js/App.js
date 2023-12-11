import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomeView from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import Settings from "./views/Settings";
import Chat from "./views/Chat";
import configureStore from "./store";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" exact element={<HomeView />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
