import React from "react";

export const Button = ({ btClass, children }) => {
    return (
        <button className={`${btClass} px-7 py-3 rounded-lg flex items-center justify-center`}>
            {children}
        </button>
    );  
};