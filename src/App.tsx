import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Router } from "./Router";

export const App = () => {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
};
