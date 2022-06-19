import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";

import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme as chinaTheme } from "./styles/themes/main";

import Home from "./components/Main/Home";
import Main from "./components/Main/Main";
import About from "./components/Main/About";
import GetMialgo from "./components/Main/GetMialgo";
import GetMialgoStacks from "./components/Main/GetMialgoStacks";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={chinaTheme}>
        <Routes>
          <Route index={true} element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/getMialgo" element={<GetMialgo />}></Route>
          <Route path="/getMialgoStacks" element={<GetMialgoStacks />}></Route>
        </Routes>
      </ThemeProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
