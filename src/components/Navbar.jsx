import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const menuList = [
        {
            title: 'home',
            to: '/'
        },
        {
            title: 'services',
            to: '/services'
        },
        {
            title: 'all countries',
            to: '/all-countries'
        },
        {
            title: 'context api',
            to: '/context-api'
        },
        {
            title: 'about',
            to: '/about'
        }
    ]

    return (
        <nav className="bg-zinc-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-4xl font-bold tracking-wide">
                    <Link to={'/'}>My Logo</Link>
                </div>
                <div>
                    <ul className="flex gap-5">
                        {
                            menuList.map((menu, m)=>{
                                return(
                                    <li key={m} className="text-xl tracking-wide capitalize font-semibold"> <NavLink to={menu.to} className={( {isActive} )=> isActive? "text-cyan-500" : "text-white"}> {menu.title} </NavLink> </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;