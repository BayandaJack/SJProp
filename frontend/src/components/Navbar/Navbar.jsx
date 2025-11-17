import NavbarImage from "./NavbarImage";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex flex-row gap-2 bg-red-700 w-full pr-10">
            <NavbarImage />
            <div className="flex flex-row justify-end items-center w-full">
                <nav className="flex gap-3 text-white font-medium text-lg">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/listings">
                        Listings
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                    <Link to="/auth/login">
                        LogIn
                    </Link>
                    <Link to="/addproperty">
                        AddProperty
                    </Link>
                </nav>
            </div>
        </div>
    );
}