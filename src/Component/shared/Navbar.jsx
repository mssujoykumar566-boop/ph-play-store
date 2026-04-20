import React from 'react';
import logoImg from '../../assets/images/logo.png'
import {  NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import MyNavLink from './MyNavLink';


const Navbar = () => {

    const  navItems = [
        {
            path:"/",
            text: "Home"
        },
        {
            path:"/apps",
            text: "Apps"
        },
        {
            path:"/installedApps",
            text: "Installation",
        },
        {
            path:"/dashboard",
            text: "Dashboard",
        }
    ]
    return (
        <nav className='bg-white shadow'>
            <div className='flex justify-between items-center gap-4  py-2 container mx-auto'>
                <img src={logoImg} alt="" className='w-12.5' />
            <ul className='flex justify-between items-center gap-2'>

                {
                    navItems.map((item,ind) =>  <MyNavLink key={ind} to={item.path}>{item.text}</MyNavLink> )
                }

{/* 
                <li>
                   
                          <MyNavLink to={"/"}>Home</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/apps"} >Apps</MyNavLink>
                        
                </li>
                <li>
                    <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
                </li>
                */}
            </ul>
            <button className="btn bg-purple-500 text-white"> <FaGithub /> Contribute</button>
            </div>
            
        </nav>
    );
};

export default Navbar;