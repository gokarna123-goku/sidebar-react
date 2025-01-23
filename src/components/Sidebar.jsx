import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFire, FaListAlt, FaHistory, FaPlayCircle, FaMusic } from 'react-icons/fa'; // Importing icons

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Home', icon: <FaHome />, link: '/' },
        { title: 'Trending', icon: <FaFire />, link: '/trending' },
        { title: 'Subscriptions', icon: <FaListAlt />, link: '/subscriptions' },
        { title: 'Library', icon: <FaHistory />, link: '/library' },
        { title: 'History', icon: <FaHistory />, link: '/history' },
        { title: 'Music', icon: <FaMusic />, link: '/music' },
    ];

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
                ☰
            </button>

            <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:block bg-gray-800 text-white w-64 h-full`}>
                <div className="flex items-center justify-between p-4">
                    <Link to="/" className="text-white font-bold text-2xl">YouTube</Link>
                </div>

                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index} className="flex items-center space-x-4 px-6 py-2 cursor-pointer hover:bg-gray-700 rounded-md">
                            <div className="text-2xl">{item.icon}</div>
                            <Link to={item.link} className="text-white">{item.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto p-4">
                    <button className="w-full bg-red-600 py-2 text-white rounded-md hover:bg-red-500">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
