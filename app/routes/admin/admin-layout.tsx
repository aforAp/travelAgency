import { Outlet } from "react-router"
import { NavItems, MobileSidebar, DesktopNavItems } from "~/components"
import SideBar from "~/Styles/SideBar"

const AdminLayout = () => {
  return (
    <div className="lg:grid lg:grid-cols-[200px_1fr] h-screen bg-white">

    <SideBar>
    <div className="admin-layout w-full flex flex-1">
      <div className="lg:grid sm:hidden md:hidden">

      <DesktopNavItems />
      </div>
      <MobileSidebar />
        <aside className="w-full max-w-[370px] sm:hidden lg:block">

            <NavItems />
        </aside>
        

        
    </div>
    </SideBar>
    <aside className="children">
         <div className="sm:absolute lg:static sm:top-5 sm:left-10">

            <Outlet />
         </div>
        </aside>
    </div>
  )
}

export default AdminLayout
