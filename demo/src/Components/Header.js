import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav id="mynav">
            <Link to = "/" className="mylink" >
                Home
            </Link>
            <Link to = "/Hook1" className="mylink" >
                Hook-1

            </Link>
            <Link to = "/Hook2" className="mylink" >
                Hoook-2
            </Link>
            <Link to = "/Hook3" className="mylink" >
                Hook-3
            </Link>
            <Link to = "/Hook4" className="mylink" >
                Hook-4
            </Link>
            <Link to = "/Hook5" className="mylink" >
                Hook-5
            </Link>
            <Link to = "/Hook6" className="mylink" >
                Hook-6
            </Link>
            <Link to = "/Hook7" className="mylink" >
                Hook-7
            </Link>
           
            <Link to ="/props" className="mylink">
                Parentclass
            </Link>
        </nav>
        </>
    );
};

export default Header;