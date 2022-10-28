import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"

import App from "./App";

import "./style.css"
/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */

const root = createRoot(
    document.getElementById("root")
);
root.render(<App />);
// root.render(<h1>Hi</h1>);
