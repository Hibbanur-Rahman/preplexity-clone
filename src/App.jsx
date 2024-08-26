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
function App() {
  return (
    <div className="w-full flex h-[100vh] overflow-hidden">
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<SearchCheck size={20} />}
            text="Home"
            alert
            active
          />
          <SidebarItem icon={<Earth size={20} />} text="Discover" />
          <SidebarItem icon={<Library size={20} />} text="Library" />
          <SidebarItem icon={<LogIn size={20} />} text="Sign in" />
          <button className="rounded-3xl mt-8 bg-[#20b8cd] py-3 flex items-center justify-center w-full">Sign Up</button>
        </Sidebar>
      </div>
      <div className="w-full h-full bg-[#202222] p-2">
        <div className="bg-[#191a1a] w-full h-full rounded-xl">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
