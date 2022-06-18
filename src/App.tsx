import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";

import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import { theme as chinaTheme } from "./styles/themes/main";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={chinaTheme}>
        <Routes>
          <Route index={true} element={<Main />}></Route>
        </Routes>
      </ThemeProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
