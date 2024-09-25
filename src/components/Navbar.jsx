import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuList = [
        { title: 'home', to: '/' },
        { title: 'services', to: '/services' },
        { title: 'all countries', to: '/all-countries' },
        { title: 'context api', to: '/context-api' },
        { title: 'about', to: '/about' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-zinc-500 py-4">
            <div className="container mx-auto flex sm:flex-col md:flex-row justify-between items-center">
                <div className="text-4xl font-bold tracking-wide">
                    <Link to={'/'}>My Logo</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? '✖️' : '☰'} {/* Hamburger Icon */}
                    </button>
                </div>
                <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row gap-5">
                        {
                            menuList.map((menu, m) => (
                                <li key={m} className="text-xl tracking-wide capitalize font-semibold">
                                    <NavLink 
                                        to={menu.to} 
                                        className={({ isActive }) => isActive ? "text-cyan-500" : "text-white"}
                                        onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                                    >
                                        {menu.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
