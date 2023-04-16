import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import AuthDetails from '../authentication/AuthDetails';

const Header = () => {
    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;
    const cart = JSON.parse(localStorage.getItem('cartProducts')) || [];

    return (
        <div>
            <nav className="bg-white border-gray-200">
                <div className="navbar">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Ema-john Logo" />
                    </Link>
                    <div className="flex items-center">
                        {
                            authUser ?
                                <>
                                    <h1 to="" className="user-name">{authUser.email}</h1>
                                    <AuthDetails />
                                </> : <Link to="login" className="user-config">Login</Link>
                        }
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div className="flex items-center flex-wrap">
                        <ul className="menu-list">
                            <li>
                                <Link to="/" className="menu" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="review" className="menu">Order Review</Link>
                            </li>
                            <li>
                                <Link to="inventory" className="menu">Manage Inventory</Link>
                            </li>
                            <li>
                                <Link to="AboutUs" className="menu">About Us</Link>
                            </li>
                        </ul>
                        <form className='ml-auto w-52'>
                            <label htmlFor="default-search" className="search-area">Search</label>
                            <div className="relative">
                                <input type="search" id="default-search" className="search-field" placeholder=" Search" required />
                                <button type="submit" className="search-handler">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <a href="/review">
                            <svg fill="none" className="w-7 h-10 ml-5 text-white" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                            </svg>
                        </a>
                        <button className='nav-Cart-Counter'>
                            <span>
                                {cart.length}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;