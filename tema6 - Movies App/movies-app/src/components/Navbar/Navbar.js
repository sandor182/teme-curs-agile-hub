import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-dark navbar-expand bg-dark'>
            <NavLink to='/movies' className='navbar-brand'>
                Agile Movie App
            </NavLink>
            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav mr-auto'>
                    {/* <li className='nav-item'>
                        <SrNavLink className='nav-link' exact to='/'>
                            Home
                        </SrNavLink>
                    </li> */}
                    <li className='nav-item'>
                        <SrNavLink className='nav-link' to='/movies'>
                            Movies <span className='sr-only'>(current)</span>
                        </SrNavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function SrNavLink({ children, ...rest }) {
    const location = useLocation();

    return (
        <NavLink {...rest}>
            {children}
            {location.pathname === rest.to ? (
                <span className='sr-only'>(current)</span>
            ) : null}
        </NavLink>
    );
}
