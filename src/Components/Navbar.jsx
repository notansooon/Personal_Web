import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full fixed bg-gray-800 h-[90px]">
            <h1 className="text-white text-4xl font-bold cursor-pointer pl-5">DLQF</h1>
            <div className="m-5">
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="bg-transparent text-white font-bold hover:text-gray-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="bg-white text-black font-bold cursor-pointer hover:bg-gray-200"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/people"
                            className="bg-transparent text-white font-bold cursor-pointer hover:text-gray-300"
                        >
                            People
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className="bg-transparent text-white font-bold cursor-pointer hover:text-gray-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="bg-transparent text-white font-bold cursor-pointer hover:text-gray-300"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/apply"
                            className="bg-transparent text-white font-bold cursor-pointer hover:text-gray-300"
                        >
                            Apply
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;









