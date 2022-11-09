import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { AuthContext } from '../../Context/UserContext';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100 py-4 shadow-lg rounded-xl sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/my-reviews">My Reviews</Link></li>
                        <li><Link to="/add-service">Add Service</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><button onClick={logOut} className='btn btn-warning'>LogOut</button></li>
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="logo" className="w-1/2" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold text-lg">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><Link to="/my-reviews">My Reviews</Link></li>
                                <li><Link to="/add-service">Add Service</Link></li>
                            </> : <>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0 font-semibold text-lg">
                    {
                        user?.uid ?
                            <>
                                <li><button onClick={logOut} className='btn btn-warning'>Log Out</button></li>
                            </> : <>
                                <li><Link className="btn btn-info" to='/login'>Login</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;