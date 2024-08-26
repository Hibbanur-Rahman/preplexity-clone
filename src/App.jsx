import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
  SearchCheck,
  Earth,
  Library,
  LogIn,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./components/sidebar";
import { Router, Routes, Route } from "react-router-dom";
import HomeDashboard from "./views/home";
import logo from './assets/logo-dark.png'
function App() {
  return (
    <div className="w-full flex md:flex-row flex-col h-[100vh] overflow-hidden">
      <div className="md:flex hidden ">
        <Sidebar>
          <SidebarItem
            icon={<SearchCheck size={22} />}
            text="Home"
            alert
            active
          />
          <SidebarItem icon={<Earth size={22} />} text="Discover" />
          <SidebarItem icon={<Library size={22} />} text="Library" />
          <SidebarItem icon={<LogIn size={22} />} text="Sign in" />
        </Sidebar>
      </div>
      <div className="md:hidden flex bg-[#191a1a] border-0 border-[#202222] border-b-2 p-3">
        <img src={logo} alt="" className="w-[200px]" />
      </div>
      <div className="w-full h-full bg-[#202222] md:p-2 ">
        <div className="bg-[#191a1a] w-full h-full md:rounded-xl md:pt-0 pt-4">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
