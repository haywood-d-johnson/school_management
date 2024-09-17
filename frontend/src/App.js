import React from "react";

import "./App.css";

import NavButtonComponent from "./Components/NavButtonComponent";
import NavbarComponent from "./Components/NavbarComponent";

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <NavButtonComponent />
        </div>
    );
}

export default App;
