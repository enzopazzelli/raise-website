import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo2 from '../assets/Raise.png';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    /** */

    const navRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                (!menuRef.current || !menuRef.current.contains(event.target))
            ) {
                setNav(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef, menuRef]);
    /** */

    const links = [
        {
            id: 1,
            link: 'nosotros'
        },
        {
            id: 2,
            link: 'servicios'
        },
        {
            id: 3,
            link: 'metodología'
        },
        {
            id: 4,
            link: 'comunidad'
        },
        {
            id: 5,
            link: 'plataforma'
        }
    ];

    return (
        <nav className='flex justify-between items-center w-full h-20 p-4 min-h-[60px] text-black border-b-2'>
            <div className='flex-shrink-0'>
                <h1 className='text-5xl font-signature ml-3 text-[#FF230D]'>
                    <Link to='#'><img src={logo2} alt="logo" width={100} className='inline pt-4 cursor-pointer hover:scale-105 duration-75' /></Link>               
                </h1>
            </div>
            <ul className='hidden md:flex ml-auto'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className='px-4 cursor-pointer capitalize font-medium text-black-400 hover:scale-105 duration-200'
                    >
                        <Link
                            to={link}
                            smooth
                            duration={500}
                            className={link === 'plataforma' ? 'text-[#FF230D]' : ''}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className='text-white w-fit px-4 py-3 my-4 ml-auto mr-1 lg:ml-1 flex items-center rounded-full bg-[#FF230D] cursor-pointer'>
                Contacto
            </button>
            <div
                ref={navRef}
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10 text-white md:hidden lg:hidden'
            >
                {nav ? <FaTimes size={20} /> : <FaBars size={20} color={'black'} />}
            </div>
            {nav && (
                <ul
                    ref={menuRef}
                    className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-[#040f2a] text-gray-300'
                >
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200'>
                            <Link
                                to={link}
                                smooth
                                duration={500}
                                className={link === 'plataforma' ? 'text-[#FF230D]' : ''}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar;