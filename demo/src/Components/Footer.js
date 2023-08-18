import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
    <footer className="mt-5 p-5 text-center border-top border-success">

        
            < Link to="/product" className="m-3">
                    Product List
            </Link>


            <Link to="/class2" className="m-3">
                classwork
            </Link>

            <Link to="/classone" className="m-3">
                classworkone
            </Link>
            <Link to="/class2" className="m-3">
                classworktwo
            </Link>

            <Link to="/class3" className="m-3">
                classthree
            </Link>
            

    </footer>
    )
};

export default Footer;