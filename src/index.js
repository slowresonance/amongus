import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

import { store } from "./store/index";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`

  a {
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    --green-color: rgba(161, 209, 139, 1);
    --green-background-color: rgba(150, 234, 143, 0.13);

    --cyan-color: rgba(139, 197, 209, 1);
    --cyan-background-color: rgba(143, 212, 234, 0.13);

    --yellow-color: rgba(209, 194, 139, 1);
    --yellow-background-color: rgba(234, 214, 143, 0.13);

    --red-color: rgba(239, 132, 93, 1);
    --red-background-color: rgba(255, 144, 109, 0.13);
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    color: #EEEEEE;
    background-color: #1C1C1C;

    font-family: 'lars', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  #root {
    width: 430px;
    height: 900px;
    padding: 20px;

    background-color: #151515;
    position: relative;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #888;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const app = ReactDOM.createRoot(document.getElementById("app"));

<React.StrictMode>
  {app.render(
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </Router>
  )}
</React.StrictMode>;
