import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { Link } from 'react-router';


const Navbar = () => {
    return (
        <nav className='flex justify-between items-center gap-4 bg-white shadow py-2'>
            <img src={logoImg} alt="" className='w-12.5' />
            <ul className='flex justify-between items-center gap-2'>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Apps</Link>
                </li>
                <li>
                    <Link>Installation</Link>
                </li>
               
            </ul>
            <button>Contribute</button>
        </nav>
    );
};

export default Navbar;