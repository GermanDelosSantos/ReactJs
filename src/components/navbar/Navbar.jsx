import '../navbar/navBar.css'
import { FaCartPlus } from "react-icons/fa";
import logo from '../../assets/react.svg'
import { Link, NavLink } from "react-router-dom";

const links = [
    {
    label: "Inicio",
    href: "/",
    },
    {
    label: "Movies",
    href: "/category/movies",
    },
    {
    label: "Series",
    href: "/category/series",
    },
];




export function navBar (){

    return (
        <header className="bg-gray-600">
            <div className="container m-auto py-6 flex justify-between items-center">
                <a href="/"> <img src={logo} alt="Logo"/></a>

                <nav className="flex gap-4">
                {links.map ((link) =>
                    <NavLink
                        key={link.href}
                        to={link.href}
                        className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-white"}`
            )}
            >
            
            {link.label}
            </NavLink>
                )}  
                    <span>
                    <FaCartPlus />
                    1
                    </span>
                </nav>

            </div>
        </header>

    )
};

export default navBar;
