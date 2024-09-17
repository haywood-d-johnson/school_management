import React from "react";

import "./index.css";

import ButtonComponent from "./ButtonComponent";

export default function NavButtonComponent() {
    return (
        <div className="navbutton-container">
            <ButtonComponent title="Manage Student Information" link="/" />
            <ButtonComponent title="Manage Student Performance" link="/" />
            <ButtonComponent title="Manage Teacher Information" link="/" />
            <ButtonComponent title="Manage Classroom Information" link="/" />
        </div>
    );
}
