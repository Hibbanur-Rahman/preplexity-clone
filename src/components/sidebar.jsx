import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import logo from "../assets/White.svg";
import profile from "../assets/react.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sidebarSlice";

export default function Sidebar({ children }) {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);

  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col justify-between bg-[#202222]  shadow-sm">
          <div>
            <div className="p-4 pb-2 flex justify-between items-center">
              <img
                src={logo}
                className={`overflow-hidden transition-all ${
                  expanded ? "w-28" : "w-0"
                }`}
              />
              <button
                onClick={() => dispatch(toggleSidebar())}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>
            <div className="w-full px-3">
              
            </div>
            <div className="px-3 mt-6">
              <ul className="fle flex-col">{children}</ul>
              {
                expanded?
                <button className="rounded-3xl mt-8 bg-[#20b8cd] py-3 flex items-center justify-center w-full">
                Sign Up
              </button>
                :''
              }
             
            </div>
          </div>

          <div className="border-t border-[#3d3f40] flex p-3">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">constGenius</h4>
                <span className="text-xs text-gray-600">
                  constgenius@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const expanded = useSelector((state) => state.sidebar.expanded);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group text-[#8d9191] ${
        active
          ? " text-white"
          : "hover:bg-[#2d2f2f] hover:text-white text-[#8d9191]"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
