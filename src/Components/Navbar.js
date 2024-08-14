import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="w-full h-20 bg-white sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <a href="/"><h1>Alejandra</h1></a>
                        <ul className="hidden md:flex gap-x-6 text-black">
                            <li>
                                <Link to="/about">About Me</Link>
                            </li>
                            <li className="relative group">
                                <button className="flex items-center focus:outline-none">
                                    Projects
                                    <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                    <li>
                                        <Link
                                            to="/projectGrid"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            100 Daily UI
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/projectGrid"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            Project
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/projectGrid"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            Project
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li>
                                <button>Message me</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;






