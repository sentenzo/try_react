import React from "react"

import Navbar from "./components/Navbar"
import Main from "./components/Main"

import css from "./index.css"

const App = () => {
    const [darkMode, set_darkMode] = React.useState(false);
    const toggle_darkMode = () => set_darkMode(old_val => !old_val)

    return <div className="container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggle_darkMode} />
        <Main darkMode={darkMode} />
    </div>;
}

export default App;