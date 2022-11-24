import React from "react";
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="container">
            <div className="load-container">
                <div className="linespinner"></div>
            </div>
        </div>
    );
};

export default Spinner;
