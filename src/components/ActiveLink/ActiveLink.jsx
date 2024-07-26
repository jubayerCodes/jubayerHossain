
import { Link } from "react-router-dom";
import React from 'react';

const ActiveLink = ({ children, href, className }) => {


    return (
        <a href={href} className={`${className}`}>
            {children}
        </a>
    );
};

export default ActiveLink;