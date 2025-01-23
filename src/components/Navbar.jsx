import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Link to="/" className="text-white font-bold text-xl">YouTube</Link>
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                />
            </div>
            <div className="text-white">Profile</div>
        </nav>
    );
};

export default Navbar;
