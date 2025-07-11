import React from 'react'
import logo from '../assets/logo.png'
import './style.css'

import { Menu, X } from 'lucide-react'

import { useState } from 'react'
import { navItems } from '../constants/index.jsx'

import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setDrawerOpen(!drawerOpen);
    }

    // ------------------

    const navigate = useNavigate();

    return (

        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-orange-500/80' >

            <div className='container px-3 mx-auto text-sm'>

                <div className='div1 flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-0 space-x-3'>
                        <img className='w-10 h-10 p-1 rounded-[25%]' src={logo} alt='logo' />
                        <span className='text-xl tracking-tight'> University </span>
                    </div>

                    <ul className='hidden lg:flex ml-14 space-x-16'>
                        {navItems.map((item, index) => (
                            // <li key={index}>
                            //     <a href={item.href}> {item.label} </a>
                            // </li>

                            <NavLink to={item.to} >
                                <li key={index} onClick={() => navigate('', { replace: true })}>
                                    <button href={item.href} disabled={item.disabled} title={item.disabled ? ' ⚠️ sorry its server data :(' : ''} style={{
                                        color: item.disabled ? '#b3c7c0' : '',
                                        cursor: item.disabled ? 'help' : 'pointer'
                                    }} >

                                        {item.label}

                                    </button>

                                    {/* <Link> {item.label} </Link> */}

                                </li>
                            </NavLink>

                        ))}
                    </ul>

                    <div className='buttonContainer hidden lg:flex justify-center space-x-12 items-center'>
                        <a href='#' onClick={() => navigate('/signin', { replace: true })} className='signInBtn  py-2 px-3 border rounded-md'>
                            Sign In
                        </a>

                        <a href='#' onClick={() => navigate('/register', { replace: true })} className='registerBtn py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800  rounded-md'>
                            Register
                        </a>
                    </div>

                    {/* -----menu toggle in mobile----- */}
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {drawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                </div>

                {drawerOpen && (

                    <div className="drawerContainer fixed right-0 z-20 bg-orange-800/90 w-full p-12 flex flex-col justify-center items-center">
                        <ul className='pb-5'>
                            {navItems.map((item, index) => (
                                // <li key={index} className='py-4'>
                                //     <a href={item.href}> {item.label} </a>
                                // </li>

                                <NavLink to={item.to} onClick={() => setDrawerOpen(false)}>
                                    <li key={index} className='py-4'>
                                        <button href={item.href} disabled={item.disabled} title={item.disabled ? ' ⚠️ sorry its server data :(' : ''} style={{
                                            color: item.disabled ? '#b3c7c0' : '',
                                            cursor: item.disabled ? 'help' : 'pointer'
                                        }} >
                                            {item.label}
                                        </button>

                                        {/* <Link> {item.label} </Link> */}

                                    </li>
                                </NavLink>
                            ))}
                        </ul>

                        <div className='flex space-x-6'>
                            <a href='#' onClick={() => { navigate('/signin'); setDrawerOpen(false) }} className='signIn py-2 px-3 border rounded-md'>
                                Sign In
                            </a>

                            <a href='#' onClick={() => { navigate('register'); setDrawerOpen(false) }} className='register py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>
                                Register
                            </a>
                        </div>
                    </div>

                )}

            </div>

        </nav >

    )
}

export default Navbar
