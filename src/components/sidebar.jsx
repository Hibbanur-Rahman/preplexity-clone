import { ArrowLeftToLine, ArrowRightFromLine, Book, Plus } from "lucide-react";
import logo from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sidebarSlice";

export default function Sidebar({ children }) {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);

  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col justify-between bg-[#202222]  shadow-sm relative">
          <div className="">
            <div className="p-4 pb-2 flex justify-between items-center">
              {expanded ? (
                <img
                  src={logo}
                  className="overflow-hidden transition-all w-32 h-[40px]"
                />
              ) : (
                <img src={logoWhite} className="w-[50px]" />
              )}

              <button onClick={() => dispatch(toggleSidebar())} className="">
                {expanded ? <ArrowLeftToLine color="#8d9191" /> : ""}
              </button>
            </div>
            {expanded ? (
              <div className="w-full px-3 mt-6">
                <div className="rounded-3xl transition-all border-2 border-[#313333] hover:border-[#20b8cd] bg-[#191a1a] flex items-center justify-between px-3 py-2 shadow-xl cursor-pointer">
                  <p className="text-[#8d9191]">New Thread</p>
                  <div className="flex gap-[5px]">
                    <span className="text-[#8d9191] border-[1px] border-[#313333] rounded h-min px-2">
                      Ctrl
                    </span>
                    <span className="text-[#8d9191] border-[1px] border-[#313333] rounded h-min px-2">
                      I
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center mt-8">
                <div className="flex rounded-full bg-[#3d3f40] p-1 cursor-pointer">
                  <Plus color="#fff" size="28px" />
                </div>
              </div>
            )}

            <ul className="fle flex-col mt-8 ps-2">{children}</ul>
            <div className="mt-4 px-3 ">
              {expanded ? (
                <button className="rounded-3xl  mt-8 bg-[#20b8cd] py-2.5 flex items-center justify-center w-full">
                  Sign Up
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          {expanded ? (
            <div className="  border-t border-[#3d3f40] flex justify-between items-center p-3">
              <div className="flex items-center gap-[5px]">
                <Book color="#8d9191" size='20px' />
                <p className="text-[#8d9191] text-semibold">Download</p>
              </div>
              <div className="flex gap-[20px] items-center">
                <i className="bi bi-twitter-x text-xl text-[#8d9191]"></i>
                <i className="bi bi-discord text-2xl text-[#8d9191]"></i>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center mb-[40px]">
              <div
                className="rounded-full bg-[#3d3f40] p-2 flex items-center justify-center cursor-pointer group"
                onClick={() => dispatch(toggleSidebar())}
              >
                <ArrowRightFromLine color="#fff" size="20px" />
                <div
                  className={`group-hover:flex absolute left-full rounded-md px-2 py-1 ml-1 bg-[#3d3f40] text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                  expand
                </div>
              </div>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const expanded = useSelector((state) => state.sidebar.expanded);
  return (
    <li
      className={`relative flex items-center justify-center py-2 px-4  my-1 font-medium rounded-md cursor-pointer transition-colors group text-[#8d9191] ${
        active && !expanded
          ? " text-white border-r-[3px] rounded-t-none rounded-b-none"
          : "hover:bg-[#2d2f2f] hover:text-white text-[#8d9191]"
      } `}
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
          className={`w-min absolute left-full rounded-md px-2 py-1 ml-6 bg-[#3d3f40] text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
