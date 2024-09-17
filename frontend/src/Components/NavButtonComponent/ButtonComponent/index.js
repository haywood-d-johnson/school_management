import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./index.css";

function ButtonComponent({ title, link }) {
    return (
        <div className="button-container">
            <button className="button-body">
                <BrowserRouter className="link-title">
                    <Link to={link} />
                    {title}
                </BrowserRouter>
            </button>
        </div>
    );
}

export default ButtonComponent;
