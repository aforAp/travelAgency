import React from 'react'
import { Link, NavLink } from 'react-router'
import assets from "../../public/assets/icons/logo.svg"
import Logout from "../../public/assets/icons/logout.svg"
import SideBar from '~/Styles/SideBar'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'
import images21 from "../../public/assets/images/david.webp";
const DesktopNavItems = () => {
// const datas = window.innerWidth <= 480 ? true: false;
// let styles;
// if(datas) {
//   styles ? "absolute bg-white h-full -ml-5 transform transition-transform translate-x-0 duration-300 ease-in-out w-auto": "-translate-x-90 transform transition-transform duration-300 ease-in-out"
// } else {
//   styles = "static";
// }
  const user = {
    name: "Satheesh",
    email: "satheeshthilagavathi@gmail.com",
    imageUrl: images21,
  }
  return (

<SideBar>

    <section className='nav-items'>
    <Link to="/" className='link-logo'>
    <img src={assets} alt="logo" className='size-[30px]' />
    <h1>Tourvisto</h1>
    </Link>
    <div className='container'>
      <nav>
        {sidebarItems.map(({id, href, icon, label}) => (
          <NavLink to={href} key={id}>
            {({isActive} : {isActive: boolean})  => (
              <div className={cn('group nav-item', {
                'bg-primary-100 text-white!': isActive
              })}>
               <img src={icon} alt={label} className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert': 'text-dark-200'}`} />
               {label}
                </div>
            )}
          </NavLink>
        ))}
      </nav>
      <footer className='nav-footer'>
       <img src={user?.imageUrl || '../../public/assets/images/david.webp'} alt={user?.name || "Satheesh"} />
       <article>
         <h2>{user?.name}</h2>
         <p>{user?.email}</p>
       </article>
       <button onClick={() => {
         console.log("logout")
        }} className="cursor-pointer">
        <img src={Logout} className='size-6' />
        </button> 
      </footer>
    </div>
    </section>
</SideBar>
  )
}

export default DesktopNavItems
