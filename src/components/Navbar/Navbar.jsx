import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";





const Navbar = () => {



    return (
        <div className='bg-base-100 sticky top-0 z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Image
                            src="/logo.png"
                            alt="Background"
                            width={24}
                            height={24}
                        />
                        GadgetHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link className='text-lg mr-4 border p-2 border-gray-100 rounded-lg' href={"/"}>Home</Link>
                        <Link className='text-lg mr-4 border p-2 border-gray-100 rounded-lg' href={"/all-gadget"}>All Gadget</Link>
                        <Link className='text-lg mr-4 border p-2 border-gray-100 rounded-lg' href={"/favorite"}>Your Favorite</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-circle mr-2 btn-lg">
                        <MdFavoriteBorder />
                    </button>
                    <button className="btn btn-circle btn-lg">
                        <IoCartOutline />

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;