import { useState } from "react";
import { FaChartLine, FaInbox, FaUser, FaCalendarAlt, FaSearch, FaFolder, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaBars, FaChevronRight } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";


const App = () => {
  const [open, setOpen] = useState(true);
  const [subMenus, setSubMenus] = useState({
    accounts: false,
    settings: false,
    files: false,
  });

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const Menus = [
    { title: "Dashboard", icon: <FaChartLine /> },
    { title: "Inbox", icon: <IoChatbubbleEllipsesSharp /> },
    { title: "Accounts", icon: <FaUser />, gap: true, subMenu: ["User Management", "Roles", "Permissions"], key: "accounts" },
    { title: "Schedule", icon: <FaCalendarAlt /> },
    { title: "Search", icon: <FaSearch /> },
    { title: "Analytics", icon: <FaChartLine /> },
    { title: "Files", icon: <FaFolder />, gap: true, subMenu: ["Documents", "Images", "Reports"], key: "files" },
    { title: "Setting", icon: <FaCog />, subMenu: ["General", "Security", "Notifications"], key: "settings" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20"} bg-zinc-900 h-screen p-5 pt-8 relative duration-300`}
      >
        <div className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-50
           border-2 rounded-full text-xl flex items-center justify-center  ${!open && "rotate-180"} transition-transform duration-300`}
          onClick={() => setOpen(!open)}
        >
          {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
        </div>

        <div className="flex gap-x-4 items-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
            className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer duration-500 ${open && "rotate-[360deg]"} `}
          />
          <h1
            className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ${!open && "scale-0"}`}
          >
            Admin Dashboard
          </h1>
        </div>

        <ul className="pt-6 space-y-0.5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex flex-col rounded-md py-3 px-4 cursor-pointer text-indigo-600 hover:bg-zinc-800/50 hover:text-white transition-all duration-300 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-zinc-800/40 text-white"}`}
            >
              <div className="flex items-center gap-x-4" onClick={() => toggleSubMenu(Menu.key)}>
                {Menu.icon}
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
                {Menu.subMenu && (
                  <span
                    className={`ml-auto cursor-pointer ${subMenus[Menu.key] ? "rotate-180" : ""} transition-transform duration-300`}
                  >
                    {subMenus[Menu.key] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {Menu.subMenu && subMenus[Menu.key] && (
                <ul className="pl-8 pt-2 space-y-2 text-zinc-400">
                  {Menu.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-sm flex items-center gap-x-2">
                      <span className="text-zinc-400">
                        <FaChevronRight />
                      </span>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 bg-zinc-100">
        <div className="w-full h-[8ch] px-8 bg-zinc-50 shadow-md flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="text-zinc-400">Logout</button>
        </div>
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default App;
