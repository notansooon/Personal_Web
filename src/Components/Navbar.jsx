import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'About', link: '/about' },
        { id: 3, text: 'Projects', link: '/projects' },
        { id: 5, text: 'Contact', link: '/contact' },
        { id: 6, text: 'Apply', link: '/apply' },
        { id: 7, text: 'People', link: '/People' }
    ];

    return (
        <div className='bg-transparent flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-black'>
            
            <h1 className='w-full text-3xl font-bold text-black'>REACT.</h1>
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li key={item.id} className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>


            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>


            <ul className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r text-white border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                {navItems.map(item => (
                    <li key={item.id} className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
                        <Link to={item.link} onClick={() => setNav(false)}>{item.text}</Link>
                    </li>
                ))}
            </ul>


            
        </div>
    );
};

export default Navbar;


