import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBars, FaBell, FaBox, FaBoxesStacked, FaChevronDown, FaEye, FaGear, FaLayerGroup, FaTableCellsLarge } from 'react-icons/fa6';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [subnavStates, setSubnavStates] = useState({
        requests: false,
        pickup: false,
        parcels: false,
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSubnav = (section) => {
        setSubnavStates((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="flex min-h-screen w-full bg-neutral-50 relative">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'w-64' : 'w-20'}
                    } max-h-screen h-screen sticky top-0 bg-neutral-800 text-white p-4 space-y-6 transition-all duration-300 transform overflow-hidden`}
            >
                <div className="flex items-center space-x-2">
                    <img
                        src="../assets/bandb.svg"
                        alt="Logo"
                        className="w-12 h-12 rounded-full filter invert brightness-0 opacity-95 saturate-100"
                    />
                    {isSidebarOpen && (
                        <h1 className="text-xl font-bold text-neutral-100">Dashboard</h1>
                    )}
                </div>

                <nav className="space-y-0">
                    <a
                        href="dashboard.html"
                        className="flex items-center space-x-3 text-indigo-400 bg-neutral-700/40 py-3 px-4 rounded-lg hover:bg-neutral-700/50"
                    >
                        <FaTableCellsLarge className='text-xl' />
                        {isSidebarOpen && <span className="menu-item">Dashboard</span>}
                    </a>

                    {/* Requests Section */}
                    <div className="w-full">
                        <button
                            onClick={() => toggleSubnav('requests')}
                            className="toggle-btn w-full text-left px-4 py-3 flex items-center justify-between hover:bg-neutral-700/50 rounded-lg"
                        >
                            <div className="flex items-center space-x-3 rounded-lg">
                                <FaBoxesStacked />
                                {isSidebarOpen && <span className="menu-item">Requests</span>}
                            </div>
                            <FaChevronDown className={`text-xs transition-transform transform ${subnavStates.pickup ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {subnavStates.requests && (
                            <ul className="subnav space-y-0 my-2 text-neutral-300 pl-7">
                                <li>
                                    <a
                                        href="newrequest.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        New Requests
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="allrequest.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        All Requests
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="declinedrequest.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        Declined Requests
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="approvedrequest.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        Approved Requests
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Pickup Section */}
                    <div className="w-full">
                        <button
                            onClick={() => toggleSubnav('pickup')}
                            className="toggle-btn w-full text-left px-4 py-3 flex items-center justify-between hover:bg-neutral-700/50 rounded-lg"
                        >
                            <div className="flex items-center space-x-3 rounded-lg">
                                <FaLayerGroup />
                                {isSidebarOpen && <span className="menu-item">Pickup</span>}
                            </div>
                            <FaChevronDown className={`text-xs transition-transform transform ${subnavStates.pickup ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {subnavStates.pickup && (
                            <ul className="subnav space-y-0 my-2 text-neutral-300 pl-7">
                                <li>
                                    <a
                                        href="recentpickup.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        Recent Pickups
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="todaypickup.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        Today's Pickups
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Parcel Section */}
                    <div className="w-full">
                        <button
                            onClick={() => toggleSubnav('parcels')}
                            className="toggle-btn w-full text-left px-4 py-3 flex items-center justify-between hover:bg-neutral-700/50 rounded-lg"
                        >
                            <div className="flex items-center space-x-3 rounded-lg">
                                <FaLayerGroup />
                                {isSidebarOpen && <span className="menu-item">Parcels</span>}
                            </div>
                            <FaChevronDown className={`text-xs transition-transform transform ${subnavStates.pickup ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {subnavStates.parcels && (
                            <ul className="subnav space-y-0 my-2 text-neutral-300 pl-7">
                                <li>
                                    <a
                                        href="allparcel.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        All Parcels
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="recentparcel.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        Recent Parcel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="todayparcel.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        Today Parcel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="findparcel.html"
                                        className="block px-4 py-2.5 text-base hover:bg-neutral-700/50 rounded-lg"
                                    >
                                        Find Parcel
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>

                    <a
                        href="checkremote.html"
                        className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-neutral-700/50"
                    >
                        <FaBox />
                        {isSidebarOpen && <span className="menu-item">Check Remote</span>}
                    </a>

                    <a
                        href="analysis.html"
                        className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-neutral-700/50"
                    >
                        <i className="fa-solid fa-layer-group"></i>
                        {isSidebarOpen && <span className="menu-item">Analysis</span>}
                    </a>

                    <a
                        href="settings.html"
                        className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-neutral-700/50"
                    >
                        <FaGear />
                        {isSidebarOpen && <span className="menu-item">Settings</span>}
                    </a>
                </nav>
            </aside>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="bg-neutral-100 shadow-md py-4 px-8 flex justify-between items-center">
                    <button
                        id="toggleSidebar"
                        onClick={toggleSidebar}
                        className="bg-neutral-800 text-white w-10 h-10 rounded-lg flex items-center justify-center"
                    >
                        <FaBars />
                    </button>

                    <div className="flex items-center space-x-6">
                        <div className="w-fit flex items-center h-11 rounded-lg border border-neutral-300 overflow-hidden px-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-1 bg-transparent outline-none w-40 focus:w-96 ease-in-out duration-300"
                            />
                            <button className="w-fit h-full text-base text-blue-600 flex items-center justify-center border-l border-neutral-300 pl-3">
                                <FaSearch className='text-lg' />
                            </button>
                        </div>
                        <button className="relative">
                            <div className="w-5 h-5 bg-neutral-50 flex items-center justify-center absolute -top-1.5 -right-2.5 rounded-full p-0.5">
                                <span className="bg-red-600 text-white rounded-full w-full h-full flex items-center justify-center text-xs">
                                    3
                                </span>
                            </div>
                            <FaBell className='text-xl' />
                        </button>
                        <img
                            src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg"
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="w-full p-8 space-y-10">
                    {/* Kind of like a banner */}
                    <div className="bg-indigo-700 py-7 px-8 rounded-xl flex items-center justify-between">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-neutral-50 uppercase">Overview</h2>
                            <p className="text-sm text-neutral-300 font-normal">
                                Welcome to your dashboard. Here you can track your shipments and <br /> manage your orders.
                            </p>
                        </div>
                        <button className="bg-indigo-100 text-indigo-600 py-3 px-4 rounded-lg flex items-center justify-center gap-x-2 hover:bg-neutral-200 transition ease-in-out duration-300">
                            <FaEye className='text-sm' />
                            <span className="text-sm font-semibold">View New Requests</span>
                        </button>
                    </div>

                    {/* Dashboard other contents */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
