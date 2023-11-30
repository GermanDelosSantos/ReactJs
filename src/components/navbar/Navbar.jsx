import '../navbar/navBar.css'
import { FaCartPlus } from "react-icons/fa";
import NavLink from './Navlink'
import logo from '../../assets/react.svg'
export function navBar (){

    return (
        <header className="bg-gray-600">
            <div className="container m-auto py-6 flex justify-between items-center">
                <img src={logo} alt="Logo"/>

                <nav className="flex gap-4">
                    <NavLink href={"#"} text={"Movies"}/>
                    <NavLink href={"#"} text={"Series"}/>
                    <NavLink href={"#"} text={"List"}/>
                    <a className="text-white hover:text-teal-400 text-lg uppercase font-semibold">
                    <span>
                    <FaCartPlus />
                    1
                    </span>
                    </a>

                </nav>

            </div>
        </header>

    )
};

export default navBar;
