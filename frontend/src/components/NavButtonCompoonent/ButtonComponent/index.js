import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const ButtonComponent = (title, link) => {
    return (
        <div className="button-container">
            <button className="button-body">
                <Link to={link}>{title}</Link>
            </button>
        </div>
    );
};

export default ButtonComponent;
