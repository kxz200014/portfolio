import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center"> 
                        <Link to="/" className="text-2xl font-bold text-blue-500">KZ</Link>
                    </div>
                    <div className="hidden md:flex md:space-x-8 flex items-center">
                        <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
                        <Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
