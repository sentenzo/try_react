import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import "./index.css"


const App = () => <div>
    <Header />
    <Content />
    <Footer />
</div>

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(<App />);
// root.render(<h1>Hi</h1>);
