import NavbarImage from "./NavbarImage";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex flex-row gap-2 bg-red-700 w-full pr-10">
            <NavbarImage />
            <div className="flex flex-row justify-end items-center w-full">
                <nav className="flex gap-3 text-white font-medium text-lg">
                    <Link className="border border-amber-50 rounded-lg p-2" to="/">
                        Home
                    </Link>
                    <Link className="border border-amber-50 rounded-lg p-2" to="/about">
                        About
                    </Link>
                    <Link className="border border-amber-50 rounded-lg p-2" to="/contact">
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
}